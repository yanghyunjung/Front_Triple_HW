# Triple_Project ✈️

### 1. Install Project(프로젝트 셋업)    
**∙ 리액트 앱 생성 & with yarn**

```javascript
yarn create react-app react_triple    
```

**∙ 필요한 패키지 설치**

```javascript
yarn add styled-components     
```

**∙ 각 폴더를 생성하고 필요한 JS파일과 이미지를 추가함**

<img width="171" alt="스크린샷 2021-09-18 오전 1 04 42" src="https://user-images.githubusercontent.com/57293780/133819801-ee5c8ddc-1fb2-4600-b584-a28a17e152f5.png">

**∙ 프로젝트 실행**

```javascript
yarn start
```

### 2. 스택을 구성하는 기술들과 선택한 이유
- **React**     
- **Styled-Components**
    - Styled-Components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있음 → 커스텀 마이징이 쉽다
- **React Hooks → useState(), useEffect()**   
    - **라이브러리 없이** 숫자가 증가하는 기능을 구현하기 위해서!    
    - 한 화면에서만 보여주기 때문에 굳이 리덕스에 넣지 않고 React Hooks에서 제공하는 useState()와 useEffect()를 사용

### 3. 프로젝트 관심사
✔︎ **CSS 완성도에 집중**    
  - 화면폭을 1200px로 맞춤     
  - 모든 애니메이션의 duration은 700ms로, 3개의 애니메이션은 100ms 간격으로 차례로 시작하게 함   

✔︎ **코드 유지보수를 위한 컴포넌트 분리**    

✔︎ **코드 일관성에 집중**    
  - 변수명     
  - 함수명    
  - 추상화 레벨      
    - (좌측 이미지), (사용자, 리뷰, 저장 문구), (수상 내역) 부분을 하나의 JS파일로 구현하지 않고, 각각의 독립적인 컴포넌트로 분리해 추상화 레벨을 일관성 있게 가져감

### 4. Trouble Shooting(트러블 슈팅)   
### ∙ `350만명의 사용자` 구현을 위한 코드
```javascript
    let numAnimation = document.querySelectorAll('.num_animation');
    let num = 0;

    let timer = setInterval(function(){
        num++;
        numAnimation.innerText = num;
        if(num === 350){
            clearInterval(timer);
        }
    })
``` 
- **하지만**, React에서는 직접 dom에 접근하지 않는 게 좋아서 document.querySelectorAll()을 사용하면 안되겠다는 생각이 듬   
   - **왜 직접 dom 접근이 안좋은가?**
      - 리액트는 가상돔을 사용해서 리렌더링을 거치는데(가상돔에 변경사항을 미리 패치하고 진짜돔과 갈아치기), 마운트 이후 직접 돔에 접근하는 건 혹시라도 해당 부분이 패치될 때를 대비하기 어렵기 때문(리액트스럽지 못함)
      
- **그리고**, 위에처럼 작성하면 21만 개의 리뷰, 650만 개의 저장 부분 코드도 추가되기 때문에 코드가 길어져 가독성이 떨어짐

- **결론은**, useState()를 사용해 상태값을 관리하고 useEffect()로 페이지 렌더링 후 작업이 수행될 수 있게 한다. 그리고 (사용자, 리뷰, 저장)에 해당하는 영역에서 숫자가 증가하는걸 보여주기 위해 {...count, ~}로 각각 객체에 대한 값을 불러와야겠다고 생각함    

### ∙ `수정한 최종 코드`    
```javascript
const [count, setCount] = useState({ num_1: 0, num_2: 0, num_3: 0 });
```
→ 값이 변경될 수 있도록 **useState()** 를 사용, 숫자를 0부터 증가시키기 위해 num_1, num_2, num_3를 0으로 초기화 시킴    
→ 렌더링 후 작업이 수행될 수 있게 **useEffect()** 사용
```javascript
useEffect(() => {
    let number = 0;
    const interval = setInterval(() => {    // 반복 시작
      number++;
      setCount({
        ...count,
        num_1: number * 1.75,   // 350÷200=1.75
        num_2: number * 0.105,  // 21÷200=0.105
        num_3: number * 3.25,   // 650÷200=3.25
      });
      if (number === 200) {     // 숫자 올라가는 속도를 조절하기위해 number === 200 로 설정     
        return clearInterval(interval);   // 반복 중단
      }
    });
    return () => clearInterval(interval);
  }, []);
```

### 5. 구현 영상   
![FullScreen](https://user-images.githubusercontent.com/57293780/133728399-5b320573-3740-4898-9e46-4544bc4ebff6.gif)
