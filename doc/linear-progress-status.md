# Linear 진행 상황 및 상태 정리

> **최종 업데이트**: 2026-01-24  
> **팀**: Readtree

## 📊 전체 현황

### 팀 정보
- **팀명**: Readtree
- **팀 ID**: `6443aab8-4f0d-47c9-be6c-6cc122d5437b`
- **생성일**: 2026-01-17
- **최종 업데이트**: 2026-01-22

### 프로젝트 현황
총 **14개 프로젝트** (모두 Backlog 상태)

| 프로젝트명 | 설명 | 상태 |
|-----------|------|------|
| AI Features | AI 추천, 자동 요약, 리포트 생성 | Backlog |
| Books Management | 책 검색, 추가, 서재 목록/상세 관리 | Backlog |
| Notes Management | 필사/사진/메모 기록, OCR, 노트 관리 | Backlog |
| Search | 통합 검색(책/기록/문장)과 필터링 | Backlog |
| Share | 카드뉴스 생성, SNS 공유, 공유 링크 | Backlog |
| Groups | 독서모임 생성/참여/대시보드 | Backlog |
| Timeline & Stats | 독서 타임라인, 목표 진행률, 통계 | Backlog |
| Infrastructure | DB 스키마, RLS, 마이그레이션, 배포/CI | Backlog |
| Profile | 사용자 프로필 및 개인 설정 | Backlog |
| Authentication | 로그인/온보딩/세션 관리 | Backlog |
| UI/UX | 디자인 시스템, 공통 컴포넌트, UX 개선 | Backlog |
| Book Circulation | 책 대여, 중고 거래, 선물 기능 | Backlog |
| Creator Tools | 크리에이터/북튜버용 기능 | Backlog |
| Admin | 관리자 대시보드, 운영 도구 | Backlog |

### 이슈 현황
총 **12개 이슈**

| 상태 | 개수 | 비율 |
|------|------|------|
| ✅ Done | 1 | 8.3% |
| 📋 Backlog | 8 | 66.7% |
| 📝 Todo | 3 | 25.0% |

---

## ✅ 완료된 작업 (Done)

### REA-13: AI 기능 모듈화 및 구조화 완료
- **상태**: ✅ Done
- **프로젝트**: AI Features
- **생성일**: 2026-01-22
- **작성자**: 최동혁
- **Git 브랜치**: `cdhrich/rea-13-refactor-ai-기능-모듈화-및-구조화-완료`

**주요 작업 내용**:
- AI 기능을 별도 모듈로 분리하고 체계적으로 구조화
- 디렉토리 구조 생성 (`lib/ai/`, `app/actions/ai/`, `app/api/ai/`, `components/ai/`, `types/ai/`, `doc/ai/`)
- Provider 추출 (Gemini, OpenAI, Anthropic)
- 프롬프트 관리 체계화
- AI 유틸리티 구현 (스트림 파서, 토큰 카운터)

[이슈 상세 보기](https://linear.app/readtree/issue/REA-13/refactor-ai-기능-모듈화-및-구조화-완료)

---

## 📋 백로그 (Backlog)

### AI Features 프로젝트 관련

#### REA-11: 2026-01-19~2026-01-20 주요 변경사항 이력
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **생성일**: 2026-01-20
- **작성자**: 최동혁

**주요 내용**:
- AI 챗봇 기능 (`/chat`) 구현
- 페르소나 분석 기능 (`/persona`) 구현
- 채팅 세션/메시지 저장 기능
- 컨텍스트 기반 대화 기능

[이슈 상세 보기](https://linear.app/readtree/issue/REA-11/chore-2026-01-192026-01-20-주요-변경사항-이력)

#### REA-10: 관리자용 LLM 모델/프롬프트/메모리 설정 콘솔
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **라벨**: 💡 idea
- **생성일**: 2026-01-20
- **작성자**: 최동혁

**목표**:
- 관리자 페이지에서 AI 기능별 LLM 모델, 프롬프트, 메모리 전략을 중앙에서 설정·관리
- 실험/튜닝 속도 향상

[이슈 상세 보기](https://linear.app/readtree/issue/REA-10/idea-관리자용-llm-모델프롬프트메모리-설정-콘솔)

#### REA-7: 책 데이터 웹검색 + 사용자 기록 기반 페르소나 생성 & 페르소나 기반 챗봇
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **라벨**: 💡 idea
- **생성일**: 2026-01-20
- **작성자**: 최동혁

**목표**:
- 책 메타데이터(웹 검색/API) + 사용자 독서 기록을 결합해 페르소나 프로필 생성
- 책별/사용자별 챗봇 경험 제공

[이슈 상세 보기](https://linear.app/readtree/issue/REA-7/idea-책-데이터-웹검색-사용자-기록-기반-페르소나-생성-and-페르소나-기반-챗봇)

#### REA-6: MBTI 형태의 독서 성향 분석 및 프로필 기능
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **라벨**: 💡 idea
- **생성일**: 2026-01-19
- **작성자**: 최동혁

**목표**:
- 사용자의 독서 패턴과 기록 데이터를 분석하여 MBTI 형태의 독서 성향 분석
- 개인화된 책 추천 및 독서 가이드 제공

[이슈 상세 보기](https://linear.app/readtree/issue/REA-6/idea-mbti-형태의-독서-성향-분석-및-프로필-기능)

#### REA-5: 페르소나 기반 독서 재촉 문구 자동 생성 기능
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **라벨**: 💡 idea
- **생성일**: 2026-01-19
- **작성자**: 최동혁

**목표**:
- 사용자가 읽었던 책과 기록 데이터를 분석하여 개인화된 페르소나 기준의 독서 재촉 문구 자동 생성
- 독서 습관 유지 동기 부여

[이슈 상세 보기](https://linear.app/readtree/issue/REA-5/idea-페르소나-기반-독서-재촉-문구-자동-생성-기능)

#### REA-9: Daily Progress 2026-01-20
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **생성일**: 2026-01-20
- **작성자**: 최동혁

**주요 내용**:
- AI/Linear 연동 작업
- 이미지 업로드/표시 안정화
- 규칙 정리 문서화
- 일간 리포트 Bot 스켈레톤 구현

[이슈 상세 보기](https://linear.app/readtree/issue/REA-9/daily-progress-2026-01-20)

#### REA-8: 일간 자동 프로그래스 리포트 Bot 설계 및 구현
- **상태**: 📋 Backlog
- **프로젝트**: AI Features
- **라벨**: 💡 idea
- **생성일**: 2026-01-20
- **작성자**: 최동혁

**목표**:
- 매일 정해진 시간에 하루 동안의 주요 변경/진척 상황을 자동 요약
- Linear에 전용 이슈/문서 자동 생성

[이슈 상세 보기](https://linear.app/readtree/issue/REA-8/feat-일간-자동-프로그래스-리포트-bot-설계-및-구현)

### 기타 이슈

#### REA-12: 모바일 이미지 업로드 중복 등록 버그 수정
- **상태**: 📋 Backlog
- **라벨**: 🐛 Bug
- **생성일**: 2026-01-21
- **작성자**: 최동혁

**문제**:
- 모바일 환경에서 이미지 업로드 시 중복 등록 버그 발생

**해결 방법**:
- 중복 업로드 방지 로직 추가 (`isUploadingRef` ref 사용)
- React 상태 업데이트 지연 문제 해결
- input value 초기화 로직 추가

[이슈 상세 보기](https://linear.app/readtree/issue/REA-12/fix-모바일-이미지-업로드-중복-등록-버그-수정)

---

## 📝 할 일 (Todo)

### REA-1: Get familiar with Linear
- **상태**: 📝 Todo
- **생성일**: 2026-01-17
- **설명**: Linear 사용법 익히기

[이슈 상세 보기](https://linear.app/readtree/issue/REA-1/get-familiar-with-linear)

### REA-2: Set up your teams
- **상태**: 📝 Todo
- **생성일**: 2026-01-17
- **설명**: 팀 설정하기

[이슈 상세 보기](https://linear.app/readtree/issue/REA-2/set-up-your-teams)

### REA-3: Connect your tools
- **상태**: 📝 Todo
- **생성일**: 2026-01-17
- **설명**: 도구 연동하기

[이슈 상세 보기](https://linear.app/readtree/issue/REA-3/connect-your-tools)

### REA-4: Import your data
- **상태**: 📝 Todo
- **생성일**: 2026-01-17
- **설명**: 데이터 가져오기

[이슈 상세 보기](https://linear.app/readtree/issue/REA-4/import-your-data)

---

## 📈 프로젝트별 이슈 분포

### AI Features 프로젝트
- **완료**: 1개 (REA-13)
- **백로그**: 7개 (REA-11, REA-10, REA-7, REA-6, REA-5, REA-9, REA-8)
- **총계**: 8개

### 프로젝트 미지정
- **백로그**: 1개 (REA-12)
- **할 일**: 3개 (REA-1, REA-2, REA-3, REA-4)
- **총계**: 4개

---

## 🎯 주요 진행 중인 작업

현재 **In Progress** 상태의 이슈는 없습니다.

---

## 💡 아이디어 이슈 요약

총 **5개의 아이디어 이슈**가 백로그에 있습니다:

1. **REA-10**: 관리자용 LLM 설정 콘솔
2. **REA-7**: 페르소나 기반 챗봇
3. **REA-6**: MBTI 형태 독서 성향 분석
4. **REA-5**: 페르소나 기반 독서 재촉 문구
5. **REA-8**: 일간 자동 프로그래스 리포트 Bot

---

## 🐛 버그 이슈

1. **REA-12**: 모바일 이미지 업로드 중복 등록 버그 (백로그)

---

## 📌 다음 단계 제안

1. **Todo 이슈 처리**: REA-1, REA-2, REA-3, REA-4 완료 처리
2. **버그 수정**: REA-12 (모바일 이미지 업로드 버그) 우선 처리
3. **아이디어 검토**: AI Features 관련 아이디어들 우선순위 결정
4. **프로젝트 활성화**: Backlog 상태인 프로젝트들 중 우선순위 높은 것부터 진행

---

## 🔗 관련 링크

- [Linear Workspace](https://linear.app/readtree)
- [프로젝트 목록](https://linear.app/readtree/projects)

---

*이 문서는 Linear MCP를 통해 자동으로 생성되었습니다.*
