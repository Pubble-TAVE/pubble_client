## 1. 폴더 구조

```
src/
├── app/              # 앱 진입 설정
│   ├── layouts/      # 공통 레이아웃 (헤더, 사이드바 등)
│   ├── router.tsx    # 라우트 정의
│   └── providers.tsx # QueryClientProvider 등
├── pages/            # 라우트 단위 페이지 (조립만 담당)
├── features/         # 기능별 묶음 (디자인이 나오는 대로 생성)
├── shared/           # 여러 기능에서 함께 쓰는 코드
│   ├── components/   # 공용 UI (Button, Modal, Input 등)
│   ├── hooks/        # 공용 훅
│   ├── lib/          # axios 인스턴스, queryClient 등 라이브러리 설정
│   ├── utils/        # 공용 함수 (cn 등)
│   └── types/        # 공용 타입 (공통 응답 타입 등)
├── mocks/            # MSW 핸들러
└── assets/           # 아이콘(svg), 이미지, 폰트
```

## 2. 브랜치 규칙

| 브랜치 | 용도 |
| --- | --- |
| `main` | 배포 브랜치 (Vercel Production). 직접 push 금지 |
| `develop` | 개발 통합 브랜치 (기본 브랜치). 직접 push 금지 |
| `feat/#이슈번호-작업명` | 기능 개발 |
| `fix/#이슈번호-작업명` | 버그 수정 |
| `refactor/#이슈번호-작업명` | 리팩터링 |
| `chore/#이슈번호-작업명` | 설정, 패키지 변경 |

공용 컴포넌트를 만들 때는 GitHub 이슈를 먼저 만들고 담당자를 지정해 선점합니다.

## 3. 커밋 규칙

### 형식

```
타입: 작업 내용 (#이슈번호)
```

### 타입

| 타입 | 설명 |
| --- | --- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 기능 변화 없는 코드 개선 |
| `design` | UI, CSS 변경 |
| `style` | 포맷팅, 세미콜론 등 로직 변화 없는 수정 |
| `chore` | 패키지, 설정 파일 변경 |
| `docs` | 문서 수정 |
| `test` | 테스트 코드 추가·수정 |