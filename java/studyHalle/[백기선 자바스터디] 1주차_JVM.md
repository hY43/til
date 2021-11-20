```
백기선님의 유튜브 "자바 스터디"에 참여하여 정리한 내용입니다.
1. 과제 내용 정리
2. 스터디 영상 확인 후, 부족한 부분 보완
```
## 1. JVM이란 무엇인가

---

* Java Virtual Machine
* Java는 **운영체제에 상관 없이** 특정 가상 머신 위에서 동작하는 언어로 이때 사용되는 가상 머신을 JVM이라 한다.

## 2. 컴파일 하는 방법

---
* $ javac [File Name].java

  -> 컴파일러의 자바 버전이 실행하는 자바 버전보다 높다면 해당 class는 실행할 수 없다. 단, 반대는 가능하다.

  ex) javac(version 11) hello.java -> java(version 8) hello.class => **실행할 수 없다.**

  -> javac option을 확인해보면 최소 버전을 지정할 수 있다. (source, target option)


## 3. 실행하는 방법

---
* $ java [File Name].class

## 4. 바이트코드란 무엇인가

---
* 가상 머신에서 읽기 위한 코드로 Java 컴파일러에 의해 컴파일이 되어 class 파일이 생성되는데 이 파일은 바이트코드로 작성이 되어있다.

  ```
  class Hello {
    public static void main(String[] args) {
        System.out.println("hello world");
    }
  }
  ```

  위의 소스코드를 컴파일 한 후, 그 결과를 보면 아래와 같은 바이트코드가 생성된다.
  ```
  $ javap -c Hello.class 
  
  Compiled from "hello.java"
  class Hello {
    Hello();
      Code:
        0: aload_0
        1: invokespecial #1                  // Method java/lang/Object."<init>":()V
        4: return
  
  public static void main(java.lang.String[]);
    Code:
      0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
      3: ldc           #3                  // String hello world
      5: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      8: return
  }
  ```

## 5. JIT 컴파일러란 무엇이며 어떻게 동작하는지

---
* 자바 컴파일러에 의해 변환된 바이트코드를 읽어 기계어로 변환해주는 컴파일러로,
* Just In Time Compiler 의 약어로, java 명령어로 class 파일을 실행하게 되면 인터프리터에 의해 바이트코드가 한줄씩 기계어로 번역이 된다.
* 그 후 실행이 된다.
* 그런데 코드중에 반복되는 코드가 있다면 JIT Compiler가 기계어로 변환해서 따로 저장을 해뒀다가 나올때마다 기계어를 직접 실행한다.
* JIT과 인터프리터는 동시에 실행된다.


## 6. JVM 구성 요소

---
* Class loader
Runtime Data Areas
Execution Engine
(Native Method Interface)

## 7. JDK와 JRE의 차이

---
* Java 9부터는 jre가 만들어지지 않기 때문에 구분되지 않는다.
* JDK: Java Development Kit, 자바 개발할때 필요한 도구들이 포함되어있다.(ex) javac)
* JRE: Java Runtime Environment