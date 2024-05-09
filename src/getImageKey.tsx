// images.ts

import avatar from "./image/IMAGE (13).png"

// Объект, хранящий изображения
const images = {
  avatar,
  warning: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      className="warning-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6442_121796)">
        <path d="M7.54492 0.171936C3.64492 0.171936 0.544922 3.27194 0.544922 7.17194C0.544922 11.0719 3.64492 14.1719 7.54492 14.1719C11.4449 14.1719 14.5449 11.0719 14.5449 7.17194C14.5449 3.27194 11.4449 0.171936 7.54492 0.171936ZM7.54492 12.1719C4.74492 12.1719 2.54492 9.97194 2.54492 7.17194C2.54492 4.37194 4.74492 2.17194 7.54492 2.17194C10.3449 2.17194 12.5449 4.37194 12.5449 7.17194C12.5449 9.97194 10.3449 12.1719 7.54492 12.1719ZM6.84492 10.3719H8.54492V6.67194H6.84492V10.3719ZM6.84492 5.57194H8.54492V3.97194H6.84492V5.57194Z" />
      </g>
      <defs>
        <clipPath id="clip0_6442_121796">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.544922 0.171936)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  date_svg: (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10483_4034)">
        <path
          d="M12.2286 2.14311V0.085968H11.0857V0.543111V2.14311H4.91429V0.085968H3.77143V2.02883H0V16.086H16V2.14311H12.2286ZM13.7143 13.8003H2.28571V4.42883H3.77143V6.2574H4.91429V4.42883H11.0857V6.2574H12.2286V4.42883H13.7143V13.8003ZM7.65714 10.7145C7.77143 10.6003 7.88571 10.486 8.11429 10.3717C8.22857 10.2574 8.45714 10.1431 8.57143 10.0288C8.68571 9.91454 8.91429 9.80025 9.02857 9.80025C9.14286 9.80025 9.25714 9.68597 9.48571 9.57168C9.6 9.4574 9.82857 9.34311 9.94286 9.22883C10.0571 9.00025 10.1714 8.88597 10.2857 8.6574C10.4 8.42883 10.4 8.20025 10.4 7.97168C10.4 7.74311 10.4 7.51454 10.2857 7.28597C10.1714 7.0574 10.0571 6.82883 9.82857 6.71454C9.6 6.48597 9.37143 6.37168 9.14286 6.37168C8.8 6.2574 8.45714 6.14311 8.11429 6.14311C7.77143 6.14311 7.54286 6.14311 7.2 6.2574C6.97143 6.37168 6.74286 6.48597 6.51429 6.60025C6.28571 6.60025 6.05714 6.71454 5.94286 6.82883C5.71429 6.94311 5.6 7.0574 5.48571 7.17168L6.4 8.20025C6.51429 8.20025 6.62857 8.08597 6.74286 7.97168C6.74286 7.8574 6.85714 7.74311 7.08571 7.74311C7.2 7.62883 7.31429 7.62883 7.42857 7.51454C7.54286 7.51454 7.77143 7.40025 7.88571 7.40025C8.22857 7.40025 8.45714 7.51454 8.57143 7.62883C8.68571 7.74311 8.8 7.97168 8.8 8.20025C8.8 8.31454 8.8 8.42883 8.68571 8.54311C8.68571 8.6574 8.57143 8.77168 8.45714 8.88597C8.22857 9.00025 8.11429 9.11454 7.88571 9.22883C7.65714 9.34311 7.42857 9.4574 7.08571 9.57168C6.74286 9.80025 6.51429 9.91454 6.28571 10.1431C6.05714 10.3717 5.94286 10.6003 5.82857 10.7145C5.6 10.9431 5.6 11.1717 5.48571 11.5145C5.48571 11.7431 5.37143 12.086 5.37143 12.4288H10.5143V11.0574H7.31429C7.42857 10.9431 7.54286 10.8288 7.65714 10.7145Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_10483_4034">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.085968)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  user_svg: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6442_121667)">
        <path
          d="M8.11429 8.45714C10.4 8.45714 12.3429 6.62857 12.3429 4.22857C12.3429 1.94286 10.5143 0 8.11429 0C5.71429 0 3.88571 1.94286 3.88571 4.22857C3.88571 6.51429 5.82857 8.45714 8.11429 8.45714Z"
          fill="#CCCCCC"
        />
        <path
          d="M12.6857 8.22857C11.5429 9.48571 9.94286 10.2857 8.11429 10.2857C6.28571 10.2857 4.68571 9.48571 3.54286 8.11429C1.71429 8.22857 0 9.71429 0 11.5429V16H16V11.5429C16 9.71429 14.4 8.34286 12.6857 8.22857Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_6442_121667">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  euro_svg: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73793 3.53102H10.2621L11.9172 1.21378C11.9172 1.21378 12.469 0.441369 10.0414 0.331024C10.0414 0.331024 8.71724 0.772403 8.05517 0.772403C7.3931 0.772403 5.95862 0.331024 5.95862 0.331024C3.53103 0.331024 4.08276 1.21378 4.08276 1.21378L5.73793 3.53102ZM15.4483 11.1448C14.0138 6.95171 10.1517 4.74482 10.1517 4.74482H5.84827C5.84827 4.74482 1.9862 6.95171 0.551721 11.1448C-0.882762 15.3379 3.08965 15.5586 3.08965 15.5586H12.9103C12.9103 15.669 16.7724 15.3379 15.4483 11.1448ZM10.5931 12.9103C10.3724 13.131 10.1517 13.2414 9.93103 13.3517C9.71034 13.4621 9.48965 13.5724 9.15862 13.6827C8.82758 13.7931 8.60689 13.7931 8.3862 13.7931C8.05517 13.7931 7.72413 13.6827 7.3931 13.5724C7.06207 13.4621 6.84138 13.2414 6.51034 13.131C6.28965 12.9103 6.06896 12.6896 5.84827 12.469C5.73793 12.1379 5.62758 11.8069 5.51724 11.4759H4.52413L4.85517 10.8138H5.40689C5.40689 10.7034 5.40689 10.5931 5.40689 10.3724H4.63448L4.85517 9.71033H5.29655C5.40689 9.3793 5.51724 9.15861 5.73793 8.82758C5.95862 8.49654 6.06896 8.27585 6.4 8.05516C6.62069 7.83447 6.95172 7.61378 7.28275 7.50344C7.61379 7.39309 8.05517 7.28275 8.3862 7.28275C8.93793 7.28275 9.48965 7.39309 9.93103 7.61378C10.3724 7.83447 10.7034 8.16551 10.9241 8.60689L9.93103 9.3793C9.82069 9.15861 9.82069 9.04827 9.6 8.93792C9.48965 8.71723 9.37931 8.71723 9.26896 8.60689C9.15862 8.49654 8.93793 8.49654 8.82758 8.3862C8.71724 8.3862 8.49655 8.3862 8.3862 8.3862C8.16551 8.3862 7.94482 8.3862 7.72413 8.49654C7.50344 8.60689 7.3931 8.71723 7.28275 8.82758C7.17241 8.93792 6.95172 9.04826 6.95172 9.26895C6.84138 9.3793 6.73103 9.59999 6.62069 9.71033H8.93793L8.71724 10.3724H6.51034V10.4827C6.51034 10.5931 6.51034 10.7034 6.51034 10.8138H8.60689L8.3862 11.4759H6.73103C6.84138 11.8069 7.06207 12.0276 7.3931 12.2483C7.72413 12.469 8.05517 12.5793 8.3862 12.5793C8.49655 12.5793 8.71724 12.5793 8.82758 12.5793C8.93793 12.5793 9.15862 12.469 9.26896 12.3586C9.37931 12.2483 9.48965 12.1379 9.71034 12.0276C9.93103 11.9172 9.93103 11.8069 9.93103 11.6965L10.9241 12.2483C10.9241 12.469 10.7034 12.6896 10.5931 12.9103Z"
        fill="#CCCCCC"
      />
    </svg>
  ),
  project_svg: (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6458_123670)">
        <path d="M8.80128 14.7862L1.40818 10.5931L0.966797 11.3655L8.69093 15.7793L16.4151 11.3655L15.9737 10.5931L8.80128 14.7862ZM16.3047 4.52413L8.80128 0.331024L1.18749 4.52413L8.80128 8.82758L16.3047 4.52413ZM8.80128 2.86896L11.7806 4.52413L8.80128 6.28964L5.71162 4.52413L8.80128 2.86896ZM16.5254 7.94482L16.084 7.1724L8.69093 11.3655L1.40818 7.1724L0.966797 7.94482L8.69093 12.3586L16.5254 7.94482Z" />
      </g>
      <defs>
        <clipPath id="clip0_6458_123670">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.746094)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  check_mark: (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75151 9.28595L2.18008 4.71453L0.580078 6.31453L6.86579 12.6002L16.5801 1.62881L14.8658 0.143097C12.5801 2.77167 9.95151 5.7431 6.75151 9.28595Z"
        fill="#999999"
      />
    </svg>
  ),
  ads_icon: (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6458_123681)">
        <path
          d="M8.09035 0.331024C3.7869 0.331024 0.366211 3.75171 0.366211 8.05516C0.366211 12.3586 3.7869 15.7793 8.09035 15.7793C12.3938 15.7793 15.8145 12.3586 15.8145 8.05516C15.8145 3.75171 12.2835 0.331024 8.09035 0.331024ZM8.09035 13.5724C5.00069 13.5724 2.57311 11.1448 2.57311 8.05516C2.57311 4.96551 5.00069 2.53792 8.09035 2.53792C11.18 2.53792 13.6076 4.96551 13.6076 8.05516C13.6076 11.1448 11.0697 13.5724 8.09035 13.5724ZM7.20759 8.60689H9.08345V4.52413H7.20759V8.60689ZM7.20759 11.4759H9.08345V9.71033H7.20759V11.4759Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6458_123681">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.0351562)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  arrow_down: (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
    </svg>
  ),
  list: (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 0H0.5V14C3.9 14 7.6 14 11.5 14V7V5L6.5 0H4.5ZM6.1 2.5L9 5.3H6.1V2.5ZM9.5 12H2.5V2H4.5H5.1V6.3H9.5V7V12Z" fill="#DD8447"/>
</svg>

  )
  
}

// Тип для ключа изображения
export type ImageKey = keyof typeof images

// Функция для получения изображения по ключу
export const getImageByKey = (key: ImageKey) => {
  return images[key]
}
