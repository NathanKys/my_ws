# 숫자의 신

[https://www.acmicpc.net/problem/1422](https://www.acmicpc.net/problem/1422)

---

- 문자열을 출력하란말 없었고 큰 수를 출력하라고 했다. 결과값을 꼭 문자열에 넣어서 출력하지 않아도 되고 배열에 담긴 숫자를 공백구분없이 출력해도 통과.

<br/>

## 1. 문자열의 비교는 문자의 비교가 아니다...

Test case가 한자리 수가 주어졌다고 해서 input이 한자리 수만 있는건 아니다... 조건 잘 읽자

<br/>

## 2. string 의 대소비교 (<,>) 의 default 는 dictionary 이다.

두 문자열 `112`, `92` 를 비교한다고 해보자. 112가 92 보다 크지만 사전순으로 문자 하나하나를 비교하면 `92` 가 `112` 보다 크다고 한다.  
`max` 함수 오버로딩 해서 문자열 길이에 관한 조건문을 추가해주면 해결.
