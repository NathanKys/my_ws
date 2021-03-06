# 유사 회문

[https://www.acmicpc.net/problem/17609](https://www.acmicpc.net/problem/17609)

회문검사는 투포인터로 좁혀오는거 이거는 기본이다.

문제조건은 문자 하나가 빠질 때 회문이 되는 조건도 찾아야 하는 것.

```cpp
ex) suuks   // `k`가 빠지면 회문이다
    zlaaz   // `l`이 빠지면 회문이다
```

만약 알고리즘을

```cpp
if(*(left+1 == *right) {
    // left pivot을 하나 옮겨서 탐색
}
else {
    // right pivot을 하나 왼쪽으로 옮겨서 탐색
}
```

이렇게 짰다면 `baaba` 에서 실패한다... 왜?  
**b~b(right-1) 랑 a~a(left+1)** 둘다 일단 조건문은 통과하기때문...

고로 재귀적으로 저 두개의 조건을 따로따로 보는게 아니라, 둘 다 확인해서 둘 중 값이 작은(회문이 나오는) 값을 리턴하게 해야한다.

**두가지 조건 중 한가지만 보는게 아니라 둘 다 보고 최소값을 뱉는게 포인트**
