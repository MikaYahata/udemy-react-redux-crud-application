/**
 * ActionとはJavaScriptのオブジェクト
 * 値とtype（ユニーク）を持つ。
 */

// export const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// export const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// ↓  コードをスリム化

// export const increment = () => ({ type: 'INCREMENT' })
// export const decrement = () => ({ type: 'DECREMENT' })

// ↓  リテラルを別の箇所でも使うので、別で定義・EXPORT

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = () => ({ type: INCREMENT})
export const decrement = () => ({ type: DECREMENT })
