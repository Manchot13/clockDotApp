import { useEffect, useState } from "react";

type props = {
  fontSize: number;
  isShadow: boolean;
  isSecond: boolean;
};

export default function Setting({ fontSize, isShadow, isSecond }: props) {
   const width = window.innerWidth;
   const initialValueSize = (width - 320) / 140 + 16
   const [size, setFontSize] = useState(initialValueSize);
   const [checkIsShadow, setIsShadow] = useState(false);
   const [checkIsSecond, setIsSecond] = useState(false);
 

  useEffect(() => {
    setFontSize((width - 320) / 140 + 16);
  }, [width]);

  fontSize = size
  isShadow = checkIsShadow
  isSecond = checkIsSecond

  return (
    <div className="h-1/2 w-1/3 bg-east-bay-600">
      <h2>設定</h2>
      <div>
        <label>フォントサイズ</label>
        <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
      </div>
      <div>
        <label>シャドー</label>
        <input type="checkbox" checked={isShadow} onChange={(e) => setIsShadow(e.target.checked)} />
      </div>
      <div>
        <label>秒</label>
        <input type="checkbox" checked={isSecond} onChange={(e) => setIsSecond(e.target.checked)} />
      </div>

      <div style={{ fontSize: size, backgroundColor: "#fff", padding: 10 }}>
        <h3>フォントサイズ: {size}</h3>
        <p>シャドー: {isShadow ? "あり" : "なし"}</p>
        <p>秒: {isSecond ? "あり" : "なし"}</p>
      </div>
    </div>
  );
}



