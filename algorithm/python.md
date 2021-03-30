# Python 문법

Python 기초 100제 참고 : https://codeup.kr/problemsetsol.php?psid=33

### 출력
```
print("Hello") # "Hello

print("print(\"Hello\\nWorld\")") # print("Hello\nWorld") 출력
```

### 입력
```
c = input() # 한줄로 입력
print(c)
```

### 정수변환
```
n = input()
n = int(n)
```

### 실수변환
```
f = input()
f = float(f)
```

### split()
```
a, b = input().split() # 공백을 기준으로 입력된 값들을 나누어(split) 자른다.
print(a, b)
```

```
hour, min = input().split(':')
print(hour, min, sep=':') # 12:10
```

### "연도.월.일"을 입력받아 "일-월-연도" 순서로 바꿔 출력
```
year, month, day = input().split('.')
print(day, month, year, sep='-')
```

```
yymmdd, num = input().split('-') # 000907-1121112
print(yymmdd, num, sep='') # 0009071121112
```

```
yymmdd = input() # 200304
print(yymmdd[0:2], yymmdd[2:4], yymmdd[4:6]) # 20 03 04
```

- 10진수 형태로 입력받고
%x로 출력하면 16진수(hexadecimal) 소문자로 출력된다.
%o로 출력하면 8진수(octal) 문자열로 출력된다.
```
a = input()
n = int(a)
print('%x' %n)
```