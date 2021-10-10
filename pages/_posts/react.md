---
title: react
data: 2021/08/12
description: 調査したもの
---

## React について

今回はよくわかってないので簡単にできる用に下記を使用していこうと思います

- typescript（.ts,.tsx）
- function component
- react hook
- redux 必要なところだけ

- scss
- tailwindcss

＊気になるところ

- eslint
- prettier
- styled-components
- emotion

### Component

ボタンやテキストなど小さい部品に分けて Component を作成する
テンプレートみたいなもの

- class component
- function component
  がある。

### Props

親コンポーネントから子コンポーネントに情報を渡すのに使用する

### reacthook

状態管理のために使用します。（ほかにも沢山あるようです）

#### useState

状態管理の state を更新します。
変数やオブジェクトに変更があった場合に使用し、変更があると再レンダーします。

<details>
<summary>例</summary>
<div>

```
const [count, setCount] = useState(0)
const increment = () => setCount(count + 1)

return (
    <>
        <div>count: {count}</div>
        <button onClick={increment}>+1</button>
    </>
)
```

</div>
</details>

#### useEffect

初期表示や更新した時に毎回行う処理をする場合に使用する

<details>
<summary>例</summary>
<div>

```
 useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])
```

</div>
</details>

#### useReducer

useState と同じ様に状態管理の state を更新します。
複数の state を持つ場合は reducer を使って状態遷移を管理する

<details>
<summary>例</summary>
<div>

```
 const [state, dispatch] = useReducer(reducer, initialArg, init);

 const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

```

</div>
</details>

#### useContext
