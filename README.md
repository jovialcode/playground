#[해야할 것]
1. Routing 어떻게 할것인지? [DONE]
2. Phaser 붙여서 오락실 만들기 [WORKING ON]
3. 오락실 모드로 바꾸기 (CSS BlackMode) [DONE]
4. Rank Repository 작성해야함.
5. 날아라 레옹이 비행기 [DONE]
    - 적들 부서질 때 효과 [DONE]
    - BGM 깔까? (오락실 BGM) [DONE]
    - 게임 Stage 안에서 enemy 생성은 generator을 쓸 것 !
6. Score Manager 만들어야함 [DONE]
    - 게임, 화면, 모델을 오가야하니깐 Manager 개념으로 만들것 [DONE]
7. BGM Manager  [DONE]
    - 볼륨 조절하는거 만들것 ! [DONE]
8. MSA [2020.06.13]
    - UI 프론트 서버
    - API 서버 만들 것
    - 인증 서버 만들 것
    - k8s와 docker, aws에 배포할 것
    - github action or zenkins 로 배포 할 것
    - 개인적으로 마이크로서비스 아키텍처는 nginx를 바탕으로 할 것
    - api gateway 서버는 netflix zuul, eureka 해볼 것 
    - 게임은 나중에 모바일로 할 것 이지만 API는 같이 쓸 것을 고려할 것 !
    - 이렇게 되면 webServer도 node 백앤드가 필요하지 않을까?

#[주의사항]
1. 방어코드 작성하는 것을 유념하기
2. typescript에서 type을 체크하는 추론방법도 잘 생각해볼 것
3. TDD를 바탕으로 개발 할 것

#[궁금한것]
1. 프론트 서버가 필요할까?(Front Controller)
2. 만약 내가 React와 ES로 프론트를 짯다면 노드 서버가 필요하겠네? 노드 서버 가 필요하겠어  

#[MSA 구성]
- front server : 8080
- eureka server : 8761
- api gateway zuul server : 8090
- auth server : 8095
- user API server : 8180
- blog API server : 8181