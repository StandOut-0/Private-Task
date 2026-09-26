# 웹사이트 메인페이지 디자인 작업

2026-09-23에 수집했다. 현재 Git 저장소의 `website-redesign/` 폴더에 저장되어 있다.

- Elimnet: https://www.elim.net/ — 메인페이지와 해당 페이지의 정적 리소스만 수집했다.
- Now&Survey: https://www.nownsurvey.com/ — 메인페이지와 해당 페이지의 정적 리소스만 수집했다.
- 링크를 따라 로그인·게시판·관리자 페이지를 크롤링하지 않았다. 백엔드/API/DB는 구현하지 않았다.

## 폴더

```text
website-redesign/
├─ original/
│  ├─ elimnet/
│  │  ├─ index.html        # 로컬 경로로 변환한 원본 화면
│  │  ├─ assets/           # 로컬 실행용 CSS/JS/이미지/폰트
│  │  ├─ source/           # 다운로드 응답 원문. 변환 전 HTML 및 리소스
│  │  └─ manifest.json     # URL, 상태 코드, 원본 SHA-256, 누락 및 추가 수집 기록
│  └─ nowandsurvey/        # 동일 구조
├─ redesign/
│  ├─ elimnet/            # index.html, assets/, custom.css, custom.js
│  └─ nowandsurvey/       # index.html, assets/, custom.css, custom.js
├─ validation/           # Edge 검증 보고서와 로컬 캡처
├─ .gitattributes
├─ .gitignore
└─ README.md
```

`original/source/`는 HTTP로 받은 응답 본문을 바이트 그대로 보관한다. HTML/CSS 경로 변환이나 JS의 정적 파일 경로 수정은 상위 `original/index.html`, `original/assets/`에만 적용했다. 원본 콘텐츠·디자인은 리팩터링하지 않았다. `original`은 비교용으로 두고 `redesign`에서 수정하면 된다.

## 실행 및 수정

현재 저장소를 VS Code로 열고 터미널에서 실행하면 된다.

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory website-redesign
```

- Elimnet 수정본: http://127.0.0.1:8000/redesign/elimnet/
- Now&Survey 수정본: http://127.0.0.1:8000/redesign/nowandsurvey/
- 원본 비교: http://127.0.0.1:8000/original/elimnet/ 및 http://127.0.0.1:8000/original/nowandsurvey/
- `website-redesign` 자체를 VS Code로 열었다면 위 명령에서 `--directory website-redesign`을 빼면 된다.
- 서버 종료는 `Ctrl+C`다. 별도 빌드나 npm 설치는 필요 없다. 파일 더블클릭보다 HTTP 서버 실행을 권장한다.

`redesign/<사이트>/index.html`에서 구조와 문구를 수정하고, `custom.css`에 스타일을 추가하거나 `assets` 안의 기존 CSS/JS를 직접 수정하면 된다. `custom.css`와 `custom.js`는 마지막에 연결되며 초기에는 스타일·기능 변경이 없다. 편집 후 브라우저를 새로고침하면 된다.

## 복제 범위와 제한

- wget/HTTrack이 없어서 Windows curl + Python/BeautifulSoup으로 HTML 참조, CSS `url()`/`@import`, 일부 JS 정적 경로를 수집했다. 인증서 검증을 끄지 않고 Windows curl을 사용했다.
- **사용된 Python 라이브러리**: `requests` (HTTP 요청), `beautifulsoup4` (HTML 파싱), `hashlib` (SHA-256 해시 계산), `json` (manifest.json 생성), `re` (정규식), `os`/`pathlib` (파일 시스템 작업)
- Google Fonts, Pretendard, GmarketSans, 아이콘 폰트, CDN UI 라이브러리와 이미지/영상 등을 로컬에 저장했다. 쿼리 문자열은 파일명에 짧은 해시로 보존했다.
- 일반 링크는 원격 원본 URL로 연결되며, 클릭하면 실제 사이트로 이동한다. 로그인, 설문 생성/제출, 결제, 검색, 게시판, 견적 전송, 회원 상태 확인은 로컬 기능이 아니다.
- `redesign`에는 외부 스크립트·API 및 폼 전송을 제한하는 CSP 메타 태그가 있다. 서버 프록시나 가짜 API는 없다. 외부 챗봇 모듈은 HTML에 보존하되 실행하지 않도록 `type="text/plain"` 처리했고, Google 번역 SDK가 없을 때 초기화 함수가 종료되도록 했다. `original/source`에는 이 변경이 없다.
- Google 번역, Typebot 상담/채용 말풍선, 분석/광고 태그, reCAPTCHA, Kakao 공유, 외부 로그인/회원 확인 등은 완전한 오프라인 재현 대상이 아니다. CSP 차단 메시지는 예상된 결과다.
- YouTube 임베드는 온라인 연결이 필요하다. 별도 창으로 열리는 시즌 팝업 페이지는 메인페이지 범위 밖이므로 내려받지 않았다. Elimnet의 메인 HTML 안에 포함된 팝업은 원본처럼 표시된다.
- 나우앤서베이의 옛 GmarketSans CDN, 일부 공용 CSS의 이미지 및 Pretendard Variable 경로 등은 원격에서도 404를 반환했다. 임의의 대체 디자인을 만들지 않았으며, 메인에 함께 연결된 다른 GmarketSans/Pretendard 폰트는 확보했다. 전체 목록은 `original/*/manifest.json`에 있다.
- 서버에서 렌더링된 설문 목록, 날짜, 참여자 수 등은 수집 시점의 스냅샷이며 실시간 갱신되지 않는다.

## Git

상위 저장소를 그대로 사용하며 별도 중첩 Git 저장소는 만들지 않았다. `original/source`의 원본 바이트 보존을 위해 줄바꿈 자동 변환을 껐다. 검증용 PNG, 캐시, 로그만 무시하며 사이트 리소스는 포함된다.

```powershell
git add website-redesign
git commit -m "Add static homepage snapshots for redesign"
```

다운로드 원문·원본 미리보기·수정본을 각각 보존하여 로컬 용량이 크다. 가장 큰 단일 파일은 약 62 MiB의 `main_v6.mp4`다. 동일한 파일 내용은 Git이 같은 객체로 저장한다. 장기적으로 영상 변경이 잦다면 첫 커밋 전에 Git LFS 사용을 권장한다. 현재 작업에서는 커밋·푸시나 LFS 설정을 수행하지 않았다.

## 검증

Edge에서 1440px 데스크톱 및 390px 모바일 화면을 확인했다. 최종 로컬 검증에서 두 페이지 모두 JavaScript 실행 오류와 HTTP 404 응답이 없었다. 외부 네트워크를 차단한 로컬 검증 결과는 `validation/report.json`, 화면 캡처는 `validation/`에 있다. Elimnet은 원격 원본과 화면 비교도 수행했다. 초기 Now&Survey 원격 브라우저 로딩은 제한 시간 내 완료되지 않았으며, HTML 다운로드와 로컬 화면 검증은 별도로 수행했다.

보완 다운로드를 포함하여 Elimnet 159개, Now&Survey 484개의 정적 리소스를 확보했다. 원문 HTML 및 수집 리소스의 SHA-256 일치와 HTML이 참조하는 로컬 파일의 존재를 확인했다. 화면에 아직 나타나지 않은 지연 로딩 이미지, 숨겨진 모달 및 외부 서비스까지 전부 동작 검증했다는 의미는 아니다.

---

**작성자**: 박상희
