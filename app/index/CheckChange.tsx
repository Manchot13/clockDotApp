import React, { useState } from "react";
//propsで値を受け取る宣言。（忘れがちなので注意）
const CheckChange = (props :any) => {
  // 親コンポーネントから受け取った関数を使って、inputの値を渡す
  const handleInputChange = (event :any) => {
    const value = event.target.value;
    props.handleValueChange(value);
  };

  return (
    <div>
      <input
        type="size"
        // フォームが更新されるとhandleInputChangeが呼ばれる
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CheckChange;


