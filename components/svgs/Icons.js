import React from 'react'


import Svg, { G, Path, Circle, Rect ,Defs, ClipPath} from "react-native-svg";

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
      stroke="red"
      strokeWidth={1.176}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="red"
    
    >
      <Path d="M19 6H5m9-1h-4m-4 5v10c0 .667.333 1 1 1h10c.667 0 1-.333 1-1V10" />
    </Svg>
  );
}
export const ShopIcon=({color}) =>{
  return (
     <Svg
    fill={color}
    height="25px"
    width="25px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-44.31 -44.31 580.93 580.93"
    xmlSpace="preserve"
    stroke={color}
    strokeWidth={8.369236}
  
  >
    <Path d="M485.507 171.298L412.209 42.952h-71.942V0H152.065v42.952H80.122L6.642 171.635c-8.625 16.538-8.519 36.317.279 52.904 6.587 12.441 17.178 21.308 29.808 25.474v242.296h418.884V250.002c12.636-4.169 23.217-13.032 29.798-25.464 8.798-16.586 8.904-36.365.096-53.24zM171.757 19.692h148.817v23.26H171.757v-23.26zm38.385 452.923h-94.01V320.394h94.01v152.221zm225.778 0H229.834V300.702H96.44v171.913H56.42v-220c18.909-.863 35.501-10.76 45.451-25.538 10.413 15.471 28.083 25.673 48.097 25.673 20.014 0 37.684-10.202 48.097-25.673 10.416 15.471 28.091 25.673 48.105 25.673 20.013 0 37.682-10.2 48.096-25.671 10.414 15.471 28.084 25.671 48.096 25.671 20.014 0 37.688-10.202 48.105-25.673 9.949 14.781 26.54 24.68 45.453 25.538v220zm32.097-257.298c-5.24 9.875-14.337 16.24-25.019 17.481-1.452.183-2.933.26-4.433.26-21.087 0-38.25-17.163-38.25-38.25h-19.692c0 21.087-17.163 38.25-38.26 38.25-21.087 0-38.25-17.163-38.25-38.25H284.42c0 21.087-17.163 38.25-38.25 38.25-21.096 0-38.26-17.163-38.26-38.25h-19.692c0 21.087-17.164 38.25-38.25 38.25-21.087 0-38.25-17.163-38.25-38.25H92.026c0 21.087-17.163 38.25-38.26 38.25-1.5 0-2.981-.077-4.471-.26-10.644-1.24-19.74-7.606-24.981-17.481-5.76-10.865-5.837-23.788-.394-34.25L91.545 62.644h309.24l67.442 118.086c5.626 10.799 5.549 23.722-.21 34.587z" />
    <Path d="M264.786 300.702v98.221h134.221v-98.221H264.786zm114.529 78.529h-94.837v-58.837h94.837v58.837z" />
  </Svg>
  )
 
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
export const SearchIcon = () => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.7}
    >
      <G clipPath="url(#a)">
        <Path fill="#fff" d="M0 0H24V24H0z" />
        <Circle
          cx={10.5}
          cy={10.5}
          r={6.5}
          stroke="#000"
          strokeLinejoin="round"
        />
        <Path
          d="M19.646 20.354a.5.5 0 00.708-.708l-.708.708zm.708-.708l-5-5-.708.708 5 5 .708-.708z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const HamburgerIcon= () => {
  return (
    <Svg
      width="35px"
      height="35px"
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.5 7.75a.75.75 0 000 1.5v-1.5zm14 1.5a.75.75 0 000-1.5v1.5zm-14 2.5a.75.75 0 000 1.5v-1.5zm12 1.5a.75.75 0 000-1.5v1.5zm-12 2.5a.75.75 0 000 1.5v-1.5zm7 1.5a.75.75 0 000-1.5v1.5zm-7-8h14v-1.5h-14v1.5zm0 4h12v-1.5h-12v1.5zm0 4h7v-1.5h-7v1.5z"
        fill="#000"
      />
    </Svg>
  );
};
export const ResetPasswordIcon= () => {
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
};
export const ChevronLeftIcon= () => {
  return (
    <Svg
      fill="#737373"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="-26 -26 104.00 104.00"
      stroke="#737373"
    
    >
      <Path d="M34.2 47.7L13.4 27.2c-.6-.6-.6-1.6 0-2.2L34.2 4.5c.6-.6 1.6-.6 2.2 0l2.2 2.2c.6.6.6 1.6 0 2.2L22.1 25c-.6.6-.6 1.6 0 2.2l16.3 16.1c.6.6.6 1.6 0 2.2l-2.2 2.2c-.5.5-1.4.5-2 0z" />
    </Svg>
  );
};
export const MenuIcon= () => {
  return (
    <Svg
      width="40px"
      height="40px"
      viewBox="-8 -8 32.00 32.00"
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-three-dots-vertical"
     
    >
      <Path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
};
export const PlusIcon= () => {
  return (
    <Svg
      width="10px"
      height="10px"
      viewBox="0 -0.5 21 21"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        transform="translate(-379 -240) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
        d="M344 89L344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89z"
      />
    </Svg>
  );
};
export const MinusIcon= () => {
  return (
    <Svg
      width="10px"
      height="10px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        fill="#0F0F0F"
      />
    </Svg>
  );
};
export const TrendIcon= () => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <Path
        d="M3 17l6-6 4 4 8-8m0 0v5m0-5h-5"
        stroke="#000"
        strokeWidth={1.224}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const DiagonalArrowcon= () => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M6 6h9M6 6v9m0-9l6.5 6.5M18 18l-2.5-2.5"
        stroke="#1C274C"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};






