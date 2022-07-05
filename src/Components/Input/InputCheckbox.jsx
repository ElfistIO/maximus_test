import style from "./Input.module.scss";

export const InputCheckbox = ({ option }) => {
  return (
    <label className={style.label__checkbox}>
      <input type="checkbox" className={style.label__checkboxInput} />
      <svg
        className={style.label__checkboxSvg}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="3.5"
          fill="white"
          stroke="#0D0D0D"
        />
        <path
          d="M7.80452 19L21 1.9L20.3055 1L7.8328 17.1634L1.6945 9.20875L1 10.1088L7.80452 19Z"
          fill="#0D0D0D"
          stroke="black"
        />
      </svg>
      <span>{option}</span>
    </label>
  );
};
