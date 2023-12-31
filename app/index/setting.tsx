// import { useEffect, useState } from "react";

// interface props {
//    ize: number;
//    isShadow: boolean;
//    isSecond: boolean;
// };

// const Setting=( size, isShadow, isSecond) => {
//    const width = window.innerWidth;
//    const initialValueSize = (width - 320) / 140 + 16
//    const [size, setFontSize] = useState(initialValueSize);
//    const [checkIsShadow, setIsShadow] = useState(false);
//    const [checkIsSecond, setIsSecond] = useState(false);

//    useEffect(() => {
//       setFontSize((width - 320) / 140 + 16);
//    }, [width]);

//    return (
//       <div>
//          <h2>設定</h2>
//          <div>
//             <label>フォントサイズ</label>
//          </div>
//          <div>
//             <label>シャドー</label>
//             <input type="checkbox" checked={isShadow} onChange={(e) => setIsShadow(e.target.checked)} />
//          </div>
//          <div>
//             <label>秒</label>
//             <input type="checkbox" checked={isSecond} onChange={(e) => setIsSecond(e.target.checked)} />
//          </div>

//          <div style={{ fontSize: size, padding: 10 }}>
//             <p>フォントサイズ: {size}</p>
//             <p>シャドー: {isShadow ? "あり" : "なし"}</p>
//             <p>秒: {isSecond ? "あり" : "なし"}</p>
//          </div>
//       </div>
//    );
// }

// export default Setting;