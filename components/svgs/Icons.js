import React from 'react'


import Svg, { G, Path, Circle, Rect } from "react-native-svg";

export const AngleIcon =() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
      
    >
      <Path
        d="M10 8l4 4-4 4"
        stroke="#737373"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export const ChangePasswordIcon=() =>{
  return (
    <Svg
      fill="#737373"
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
      
    >
      <Path d="M464.433 147.54a9.899 9.899 0 00-17.56 9.14 214.264 214.264 0 01-38.769 251.42c-83.856 83.848-220.315 83.875-304.207-.008a9.896 9.896 0 00-16.893 7.005v56.9a9.896 9.896 0 0019.793 0v-34.55A234.95 234.95 0 00464.433 147.54zM103.897 103.902c83.882-83.874 220.341-83.865 304.207-.009a9.89 9.89 0 0016.892-6.996v-56.9a9.896 9.896 0 00-19.793 0v34.55C313.023-1.356 176.055 3.751 89.904 89.901a233.956 233.956 0 00-42.337 274.553 9.899 9.899 0 0017.56-9.14 214.249 214.249 0 0138.77-251.412z" />
      <Path d="M126.4 254.555v109.44a27.08 27.08 0 0027 27h205.2a27.077 27.077 0 0027-27v-109.44a27.078 27.078 0 00-27-27H153.4a27.08 27.08 0 00-27 27zM328 288.13a21.146 21.146 0 11-21.146 21.146A21.167 21.167 0 01328 288.13zm-72 0a21.146 21.146 0 11-21.146 21.146A21.167 21.167 0 01256 288.13zm-72 0a21.146 21.146 0 11-21.146 21.146A21.167 21.167 0 01184 288.13zM343.653 207.756v-36.002a87.653 87.653 0 00-175.306 0v36.002h19.793v-36.002a67.86 67.86 0 01135.72 0v36.002z" />
    </Svg>
  );
}
export const EditIcon=() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
     
    >
      <G strokeWidth={1.176} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M21.28 6.4l-9.54 9.54c-.95.95-3.77 1.39-4.4.76-.63-.63-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 113.64 3.65v0z" />
        <Path d="M11 4H6a4 4 0 00-4 4v10a4 4 0 004 4h11c2.21 0 3-1.8 3-4v-5" />
      </G>
    </Svg>
  );
}
export const CloseAccountIcon=() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
    >
      <Path
        d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-6h6M9 12a4 4 0 110-8 4 4 0 010 8z"
        stroke="#737373"
        strokeWidth={1.176}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export const LogOutIcon=() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
     
    >
      <G strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.176}>
        <Path d="M15 3H7a2 2 0 00-2 2v14a2 2 0 002 2h8M19 12l-4-4m4 4l-4 4m4-4H9" />
      </G>
    </Svg>
  );
}

export const HeartIcon=() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#737373"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 00.258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6z"
        strokeWidth={1.176}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export const BinIcon=() =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="binIconTitle"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#000"
    
    >
      <Path d="M19 6H5m9-1h-4m-4 5v10c0 .667.333 1 1 1h10c.667 0 1-.333 1-1V10" />
    </Svg>
  );
}
export const ShopIcon=({color}) =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      stroke={color}
      strokeWidth={1}
    >
      <Path d="M20.6 5.26a2.512 2.512 0 00-2.48-2.2H5.885a2.512 2.512 0 00-2.48 2.19l-.3 2.47a3.411 3.411 0 001.16 2.56v8.16a2.5 2.5 0 002.5 2.5h10.47a2.5 2.5 0 002.5-2.5v-8.16A3.411 3.411 0 0020.9 7.72zm-6.59 14.68h-4v-4.08a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5zm4.73-1.5a1.5 1.5 0 01-1.5 1.5h-2.23v-4.08a2.5 2.5 0 00-2.5-2.5h-1a2.5 2.5 0 00-2.5 2.5v4.08H6.765a1.5 1.5 0 01-1.5-1.5v-7.57a3.223 3.223 0 001.24.24 3.358 3.358 0 002.58-1.19.241.241 0 01.34 0 3.358 3.358 0 002.58 1.19A3.393 3.393 0 0014.6 9.92a.219.219 0 01.16-.07.238.238 0 01.17.07 3.358 3.358 0 002.58 1.19 3.173 3.173 0 001.23-.24zm-1.23-8.33a2.386 2.386 0 01-1.82-.83 1.2 1.2 0 00-.92-.43h-.01a1.194 1.194 0 00-.92.42 2.476 2.476 0 01-3.65 0 1.24 1.24 0 00-1.86 0A2.405 2.405 0 014.1 7.78l.3-2.4a1.517 1.517 0 011.49-1.32h12.23a1.5 1.5 0 011.49 1.32l.29 2.36a2.392 2.392 0 01-2.395 2.37z" />
    </Svg>
  );
}
export const RemoveWishIcon=() =>{
  return (
    <Svg
      fill="#727472"
      width="20px"
      height="20px"
      viewBox="-2.94 0 31.716 31.716"
      xmlns="http://www.w3.org/2000/svg"
      stroke="##727472"
      strokeWidth={1.5858}
    >
      <Path
        d="M376.515 610.716h-15.284a2.361 2.361 0 01-2.358-2.359V584.1a1 1 0 012 0v24.255a.36.36 0 00.358.359h15.284a.36.36 0 00.358-.359V584.1a1 1 0 012 0v24.255a2.361 2.361 0 01-2.358 2.361z"
        transform="translate(-355.957 -579)"
      />
      <Path
        d="M365.457 604.917a1 1 0 01-1-1v-14a1 1 0 012 0v14a1 1 0 01-1 1zM372.29 604.917a1 1 0 01-1-1v-14a1 1 0 012 0v14a1 1 0 01-1 1zM380.79 585.1h-23.833a1 1 0 010-2h23.833a1 1 0 010 2zM372.79 581h-7.917a1 1 0 110-2h7.917a1 1 0 010 2z"
        transform="translate(-355.957 -579)"
      />
    </Svg>
  );
}
export const HomeIcon=({color}) =>{
  return (
    <Svg
      viewBox="-12.24 -12.24 48.48 48.48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
    >
      <Path
        d="M18.438 20c.918 0 1.711-.627 1.835-1.537.117-.864.227-2.053.227-3.463 0-3 .168-4.832-3-8-1.461-1.461-3.094-2.581-4.198-3.26a2.474 2.474 0 00-2.604 0C9.593 4.42 7.96 5.54 6.5 7c-3.168 3.168-3 5-3 8 0 1.41.11 2.599.227 3.463.124.91.917 1.537 1.835 1.537h12.876z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export const AccountIcon=({color}) =>{
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12 12a5 5 0 100-10 5 5 0 000 10zM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" />
      </G>
    </Svg>
  );
}

export const CartIcon=({color}) =>{
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={1.2}
      
    >
      <Path
        d="M3.5 4.5h1.558c.696 0 1.044 0 1.306.189s.372.519.592 1.179L7.5 7.5"
        stroke={color}
        strokeLinecap="round"
      />
      <Path
        d="M17.5 17.5H8.05c-.145 0-.218 0-.274-.006a1 1 0 01-.867-1.203c.012-.054.035-.124.081-.262v0c.052-.154.077-.231.106-.3a2 2 0 011.698-1.224c.074-.005.155-.005.317-.005H14.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.179 14.5h-3.041c-1.28 0-1.92 0-2.42-.33-.501-.33-.753-.918-1.257-2.094l-.169-.394c-.81-1.89-1.214-2.833-.77-3.508C6.968 7.5 7.996 7.5 10.05 7.5h5.28c2.3 0 3.449 0 3.883.747.433.747-.137 1.745-1.278 3.741l-.283.497c-.562.983-.843 1.475-1.309 1.745-.465.27-1.032.27-2.164.27z"
        stroke={color}
        strokeLinecap="round"
      />
      <Circle cx={17} cy={20} r={1} fill={color} />
      <Circle cx={9} cy={20} r={1} fill={color} />
    </Svg>
  );
}

export const NewsIcon = ({ color }) => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={1.2}
    
    >
      <G stroke={color}>
        <Rect x={5} y={5} width={14} height={14} rx={3} />
        <Path d="M5 10h14" strokeLinecap="round" />
      </G>
    </Svg>
  );
};






