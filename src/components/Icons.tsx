export interface IconProps {
  className?: string
  sizeClasses?: string
}

export const Rust = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    className={`${props.sizeClasses || 'h-20 w-20'} ${props.className || ''}`}
  >
    <path d="M508.5 249.7 487 236.4c-.1-2.1-.3-4.2-.6-6.2l18.5-17.2c4-3.8 2.6-10.5-2.5-12.4l-23.6-8.8c-.6-2.1-1.2-4.1-1.8-6.2l14.7-20.4c3.3-4.5.7-10.7-4.8-11.7l-24.9-4.1c-.9-1.9-1.9-3.7-2.9-5.6l10.4-22.9c1.1-2.3.8-5.1-.6-7.2-1.4-2.1-3.9-3.4-6.4-3.3l-25.3.9c-1.3-1.7-2.6-3.3-4-4.9L439 82c1.2-5.4-3.5-10.2-8.9-8.9l-24.6 5.8c-1.6-1.4-3.2-2.7-4.9-4l.9-25.3c.3-5.5-5.5-9.3-10.4-7l-23 10.4c-1.9-1-3.7-2-5.7-2.9l-4.1-24.9c-.9-5.4-7.2-8-11.6-4.8l-20.4 14.7c-2-.7-4.1-1.2-6.1-1.8l-8.9-23.5c-1.9-5.2-8.6-6.5-12.3-2.5l-17.2 18.6c-2.1-.3-4.2-.5-6.3-.7L262.3 3.6c-2.9-4.7-9.7-4.7-12.6 0L236.4 25c-2.1.1-4.2.4-6.2.7L212.9 7.1c-3.8-4-10.4-2.7-12.4 2.5l-8.8 23.5c-2.1.6-4 1.2-6.2 1.8l-20.4-14.7c-4.5-3.2-10.7-.6-11.7 4.8l-4.1 24.9c-1.9.9-3.7 1.9-5.6 2.9l-23-10.4c-5.1-2.3-10.7 1.5-10.4 7l.8 25.3c-1.6 1.3-3.2 2.6-4.8 4L81.9 73c-5.3-1.2-10.1 3.5-8.9 8.9l5.7 24.6c-1.4 1.6-2.6 3.2-4 4.9l-25.2-.9c-5.6-.2-9.3 5.5-7 10.4L53 143.8c-1 1.9-2 3.7-3 5.6l-24.9 4.1c-5.4.9-8 7.2-4.8 11.7l14.8 20.4c-.7 2.1-1.3 4.1-1.9 6.2l-23.6 8.8c-5.1 1.9-6.4 8.6-2.4 12.4l18.5 17.2c-.3 2-.4 4.1-.6 6.2L3.5 249.7c-4.7 2.8-4.7 9.7 0 12.5L25 275.5c.1 2.1.3 4.2.6 6.2L7.2 299.1c-4.1 3.7-2.7 10.4 2.4 12.3l23.6 8.9c.6 2 1.2 4 1.9 6.1l-14.8 20.4c-3.2 4.5-.6 10.8 4.9 11.6l24.9 4.1c.9 1.9 1.9 3.7 3 5.6L42.6 391c-2.3 5.1 1.5 10.7 7 10.4l25.2-.8c1.4 1.6 2.6 3.2 4.1 4.8L73.1 430c-1.2 5.3 3.5 10.1 8.9 8.9l24.6-5.7c1.6 1.4 3.2 2.6 4.9 4l-.9 25.2c-.3 5.6 5.5 9.3 10.4 7l23-10.4c1.9 1 3.7 2 5.6 3l4.2 24.9c.8 5.4 7.1 7.9 11.5 4.8l20.5-14.8c2 .7 4.1 1.2 6.1 1.8l8.9 23.6c1.9 5.2 8.5 6.5 12.3 2.5l17.2-18.5c2.1.3 4.1.5 6.2.7l13.3 21.5c2.9 4.7 9.7 4.7 12.6 0l13.3-21.5c2.1-.1 4.1-.4 6.2-.7l17.2 18.5c3.8 4 10.4 2.7 12.3-2.5l8.9-23.6c2-.6 4-1.2 6.1-1.8l20.4 14.8c4.5 3.3 10.8.6 11.6-4.8l4.1-24.9 5.7-3 22.9 10.4c5 2.3 10.6-1.5 10.4-7l-.9-25.2c1.7-1.4 3.3-2.6 4.8-4l24.6 5.7c5.3 1.2 10.1-3.6 8.9-8.9l-5.8-24.6c1.4-1.6 2.7-3.2 4-4.8l25.3.8c5.5.3 9.3-5.4 7-10.4L459 368c1-1.9 2-3.7 2.9-5.6l24.9-4.1c5.4-.9 8-7.2 4.8-11.6l-14.7-20.4 1.8-6.1 23.5-8.9c5.2-1.9 6.5-8.6 2.5-12.3l-18.5-17.3c.2-2 .4-4.1.6-6.2l21.5-13.3c4.9-2.8 4.9-9.7.2-12.5zM364.6 427.9c-19.8-4.2-13.5-34 6.4-29.8 8.2 1.8 13.4 9.9 11.6 18.1-1.7 8.2-9.8 13.5-18 11.7zm-7.2-49.4c-7.5-1.6-14.9 3.2-16.4 10.7l-7.7 35.5c-23.5 10.7-49.7 16.7-77.2 16.7-27.3 0-54.2-5.9-78.8-17.4l-7.7-35.6c-1.6-7.5-8.9-12.3-16.5-10.6l-31.4 6.7c-5.9-6-11.3-12.4-16.3-19.2h153c1.7 0 2.9-.2 2.9-1.9v-54.1c0-1.6-1.2-1.9-2.9-1.9h-44.8v-34.3H262c4.4 0 23.6 1.2 29.7 25.8 1.9 7.5 6.2 32.1 9 39.9 2.9 8.9 14.6 26.4 27.1 26.4H404l2.8-.2c-5.2 7.2-11 14-17.3 20.3l-32.1-6.8zm-211.5 48.7c-8.2 1.7-16.3-3.5-18.1-11.7-1.8-8.3 3.4-16.4 11.7-18.1 8.2-1.8 16.3 3.4 18.1 11.7 1.7 8.3-3.6 16.4-11.7 18.1zM87.8 191.9c3.7 7.8.3 17-7.5 20.6-7.8 3.4-17-.2-20.3-8.2-7.4-18.2 19.3-30.1 27.8-12.4zM70 234.2l32.7-14.5c7-3.1 10.1-11.3 7-18.3l-6.8-15.3h26.6v119.5H76.1c-6.6-23.1-8.7-47.4-6.1-71.4zm143.7-11.6v-35.3h63.1c3.3 0 23 3.8 23 18.6 0 12.3-15.2 16.7-27.6 16.7h-58.5zm229.5 31.8c0 4.7-.2 9.3-.5 13.8h-19.2c-1.9 0-2.7 1.3-2.7 3.2v8.8c0 20.7-11.6 25.2-21.9 26.4-9.8 1.1-20.6-4.1-21.9-10-5.7-32.4-15.4-39.3-30.5-51.3 18.8-12 38.4-29.5 38.4-53.1 0-25.5-17.5-41.5-29.4-49.4-16.7-11.1-35.2-13.2-40.2-13.2H116.7c27.4-30.7 64.2-51.5 104.6-59.2L244.8 95c5.2 5.5 14.1 5.7 19.6.4l26.2-25.1c54.1 10.1 100.9 43.5 128.1 91.2l-18 40.5c-3 7 .1 15.2 7.1 18.3l34.5 15.3c.5 6.3.8 12.4.9 18.8zM244.8 49.5c14.7-14 35.7 8 21 22-14.6 12.7-34.3-8-21-22zm177.9 143.2c3.4-7.7 12.3-11.1 20-7.8 12.5 5.5 12.1 23.3-.6 28.2-12.8 4.9-25-8-19.4-20.4z" />
  </svg>
)

export const Javascript = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    className={`${props.sizeClasses || 'h-20 w-20'} ${props.className || ''}`}
  >
    <path
      style={{
        fill: '#f7df1e',
      }}
      d="M0 0h512v512H0z"
    />
    <path d="m134.66 427.84 39.14-23.71c7.57 13.47 14.45 24.69 30.86 24.69 15.85 0 25.81-6.17 25.81-30.3V235.1h48.11v164.26c0 49.8-29.18 72.52-71.82 72.52-38.43 0-60.73-19.92-72.1-44.04m170.16-5.19 39.14-22.72c10.38 16.83 23.71 29.18 47.41 29.18 19.92 0 32.68-9.96 32.68-23.71 0-16.55-13.05-22.3-35.07-31.98l-12.06-5.19c-34.65-14.73-57.79-33.39-57.79-72.52 0-36.05 27.49-63.54 70.42-63.54 30.58 0 52.6 10.66 68.45 38.44l-37.45 23.99c-8.28-14.73-17.11-20.62-30.86-20.62-14.03 0-23 8.98-23 20.62 0 14.45 8.98 20.34 29.6 29.18l12.06 5.19c40.96 17.53 63.96 35.35 63.96 75.61 0 43.34-34.09 67.05-79.68 67.05-44.89.25-73.79-21.07-87.81-48.98" />
  </svg>
)

export const Typescript = (props: IconProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    className={`${props.sizeClasses || 'h-24 w-24'} ${props.className || ''}`}
  >
    <style>{'.st1{fill:#fff}'}</style>
    <g id="XMLID_1_">
      <path
        id="XMLID_2_"
        style={{
          fill: '#007acc',
        }}
        d="M67.5 250v182.5h365v-365h-365z"
      />
      <path
        id="XMLID_3_"
        className="st1"
        d="m148.2 251.2-.1 14.9h47.6v135h33.6v-135h47.5v-14.7c0-8.1-.2-14.9-.4-15.1-.2-.2-29.1-.3-64.1-.3l-63.8.2-.3 15z"
      />
      <path
        id="XMLID_4_"
        className="st1"
        d="M362 235.9c9.3 2.3 16.3 6.4 22.8 13.2 3.4 3.6 8.3 10.1 8.7 11.7.1.5-15.8 11.1-25.4 17.1-.3.2-1.7-1.3-3.3-3.6-4.7-6.8-9.6-9.8-17.1-10.3-11.1-.8-18.2 5-18.1 14.7 0 2.8.4 4.5 1.6 6.8 2.4 5 7 8.1 21.1 14.2 26.1 11.2 37.3 18.7 44.3 29.2 7.8 11.8 9.5 30.5 4.2 44.5-5.8 15.2-20.2 25.5-40.4 28.9-6.3 1.1-21.1.9-27.8-.3-14.7-2.6-28.6-9.8-37.1-19.4-3.4-3.7-9.9-13.4-9.5-14.1.2-.2 1.7-1.2 3.4-2.1 1.6-.9 7.8-4.5 13.6-7.8l10.5-6.1 2.2 3.2c3.1 4.7 9.8 11.1 13.8 13.3 11.6 6.1 27.6 5.3 35.5-1.8 3.4-3.1 4.8-6.3 4.8-10.9 0-4.2-.5-6.1-2.7-9.3-2.8-4.1-8.6-7.5-25.1-14.6-18.8-8.1-26.9-13.2-34.4-21.1-4.3-4.6-8.3-12.1-10-18.2-1.4-5.2-1.7-18.1-.6-23.3 3.9-18.2 17.6-30.9 37.4-34.6 6.4-1.3 21.3-.9 27.6.7z"
      />
    </g>
  </svg>
)

export const NodeJs = (props: IconProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x={0}
    y={0}
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    className={`${props.sizeClasses || 'h-32 w-32'} ${props.className || ''}`}
  >
    <style>{'.st0{fill:#689f63}'}</style>
    <g id="XMLID_1_">
      <path
        id="XMLID_2_"
        className="st0"
        d="M247.9 361.8c-1.2 0-2.4-.3-3.5-.9l-11-6.5c-1.6-.9-.8-1.2-.3-1.4 2.2-.8 2.6-.9 5-2.3.2-.1.6-.1.8.1l8.5 5c.3.2.7.2 1 0l33-19c.3-.2.5-.5.5-.9v-38c0-.4-.2-.7-.5-.9l-32.9-19c-.3-.2-.7-.2-1 0l-32.9 19c-.3.2-.5.5-.5.9v38c0 .4.2.7.5.9l9 5.2c4.9 2.5 7.9-.4 7.9-3.3V301c0-.5.4-.9 1-.9h4.2c.5 0 .9.4.9.9v37.6c0 6.5-3.6 10.3-9.8 10.3-1.9 0-3.4 0-7.6-2.1l-8.6-5c-2.1-1.2-3.5-3.5-3.5-6v-38c0-2.5 1.3-4.8 3.5-6l33-19c2.1-1.2 4.9-1.2 6.9 0l33 19c2.1 1.2 3.5 3.5 3.5 6v38c0 2.5-1.3 4.8-3.5 6l-33 19c-1.2.6-2.4 1-3.6 1"
      />
      <path
        id="XMLID_3_"
        className="st0"
        d="M258.1 335.6c-14.4 0-17.4-6.6-17.4-12.2 0-.5.4-.9 1-.9h4.3c.5 0 .9.3.9.8.6 4.3 2.6 6.5 11.3 6.5 6.9 0 9.9-1.6 9.9-5.3 0-2.1-.8-3.7-11.6-4.8-9-.9-14.6-2.9-14.6-10.1 0-6.7 5.6-10.6 15-10.6 10.6 0 15.8 3.7 16.4 11.5 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H268c-.4 0-.8-.3-.9-.7-1-4.6-3.5-6-10.3-6-7.6 0-8.5 2.6-8.5 4.6 0 2.4 1 3.1 11.3 4.5 10.1 1.3 14.9 3.2 14.9 10.4s-6 11.3-16.4 11.3m40.1-40.3h1.1c.9 0 1.1-.6 1.1-1 0-1-.7-1-1-1h-1.1l-.1 2zm-1.4-3.2h2.5c.8 0 2.5 0 2.5 1.9 0 1.3-.8 1.6-1.3 1.7 1 .1 1 .7 1.2 1.6.1.6.2 1.6.4 1.9h-1.5c0-.3-.3-2.1-.3-2.2-.1-.4-.2-.6-.7-.6h-1.2v2.9H297v-7.2zm-2.9 3.6c0 3 2.4 5.3 5.3 5.3 3 0 5.3-2.4 5.3-5.3 0-3-2.4-5.3-5.3-5.3s-5.3 2.3-5.3 5.3m11.7 0c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.8-6.4-6.4 0-3.6 3-6.4 6.4-6.4 3.4.1 6.4 2.8 6.4 6.4"
      />
      <path
        id="XMLID_9_"
        d="M145.8 212.9c0-1.5-.8-2.9-2.1-3.7l-34.9-20.1c-.6-.3-1.3-.5-1.9-.6h-.4c-.7 0-1.3.2-1.9.6l-34.9 20.1c-1.3.8-2.1 2.2-2.1 3.7l.1 54.2c0 .8.4 1.5 1 1.8.6.4 1.5.4 2.1 0L91.5 257c1.3-.8 2.1-2.2 2.1-3.7V228c0-1.5.8-2.9 2.1-3.7l8.8-5.1c.7-.4 1.4-.6 2.1-.6.7 0 1.5.2 2.1.6l8.8 5.1c1.3.8 2.1 2.1 2.1 3.7v25.3c0 1.5.8 2.9 2.1 3.7l20.8 11.9c.7.4 1.5.4 2.1 0 .6-.4 1-1.1 1-1.8l.2-54.2zm164.9 28.2c0 .4-.2.7-.5.9l-12 6.9c-.3.2-.7.2-1.1 0l-12-6.9c-.3-.2-.5-.5-.5-.9v-13.9c0-.4.2-.7.5-.9l12-6.9c.3-.2.7-.2 1.1 0l12 6.9c.3.2.5.5.5.9v13.9zm3.3-102.6c-.7-.4-1.5-.4-2.1 0-.6.4-1 1.1-1 1.8V194c0 .5-.3 1-.7 1.3-.5.3-1 .3-1.5 0l-8.8-5c-1.3-.8-2.9-.8-4.2 0l-35 20.2c-1.3.8-2.1 2.1-2.1 3.6v40.4c0 1.5.8 2.9 2.1 3.7l35 20.2c1.3.8 2.9.8 4.2 0l35-20.2c1.3-.8 2.1-2.1 2.1-3.7V153.8c0-1.5-.8-2.9-2.2-3.7L314 138.5zm116.4 88.4c1.3-.8 2.1-2.1 2.1-3.6v-9.8c0-1.5-.8-2.9-2.1-3.7l-34.7-20.2c-1.3-.8-2.9-.8-4.2 0l-35 20.2c-1.3.8-2.1 2.1-2.1 3.7v40.3c0 1.5.8 2.9 2.1 3.7l34.7 19.8c1.3.7 2.8.7 4.1 0l21-11.7c.7-.4 1.1-1.1 1.1-1.8 0-.8-.4-1.5-1.1-1.8l-35.2-20.2c-.7-.4-1.1-1.1-1.1-1.8v-12.7c0-.8.4-1.5 1.1-1.8l10.9-6.3c.7-.4 1.5-.4 2.1 0l10.9 6.3c.7.4 1.1 1.1 1.1 1.8v10c0 .8.4 1.5 1.1 1.8.7.4 1.5.4 2.1 0l21.1-12.2z"
        style={{
          fill: '#404137',
        }}
      />
      <path
        id="XMLID_14_"
        className="st0"
        d="M393 225c.2-.1.6-.1.8 0l6.7 3.9c.3.1.4.4.4.7v7.7c0 .3-.2.6-.4.7l-6.7 3.9c-.3.1-.6.1-.8 0l-6.7-3.9c-.3-.1-.4-.4-.4-.7v-7.7c0-.3.1-.6.4-.7l6.7-3.9z"
      />
      <g id="XMLID_15_">
        <defs>
          <path
            id="XMLID_16_"
            d="M200.1 189.9 165.3 210c-1.3.8-2.1 2.1-2.1 3.6v40.2c0 1.5.8 2.9 2.1 3.6l34.8 20.1c1.3.7 2.9.7 4.2 0l34.8-20.1c1.3-.8 2.1-2.1 2.1-3.6v-40.2c0-1.5-.8-2.9-2.1-3.6l-34.8-20.1c-.7-.4-1.4-.6-2.1-.6s-1.4.2-2.1.6"
          />
        </defs>
        <clipPath id="XMLID_39_">
          <use
            xlinkHref="#XMLID_16_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1={0.377}
          y1={-0.047}
          x2={0.996}
          y2={-0.047}
          gradientTransform="rotate(116.114 88.848 136.098) scale(184.3927)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#3e863d',
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: '#3e863d',
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: '#55934f',
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: '#5aad45',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#5aad45',
            }}
          />
        </linearGradient>
        <path
          style={{
            clipPath: 'url(#XMLID_39_)',
            fill: 'url(#SVGID_1_)',
          }}
          d="m276.3 206.5-98-48L128.1 261l98 48z"
        />
      </g>
      <g id="XMLID_17_">
        <defs>
          <path
            id="XMLID_18_"
            d="M164.1 256.3c.3.4.7.8 1.2 1.1l29.8 17.2 5 2.9c.7.4 1.6.6 2.4.5.3 0 .6-.1.8-.2l36.7-67.1c-.3-.3-.6-.6-1-.8l-22.8-13.1-12-6.9c-.3-.2-.7-.3-1.1-.4l-39 66.8z"
          />
        </defs>
        <clipPath id="XMLID_40_">
          <use
            xlinkHref="#XMLID_18_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1={0.05}
          y1={0.133}
          x2={0.669}
          y2={0.133}
          gradientTransform="rotate(-36.46 451.806 -77.324) scale(183.7799)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#3e863d',
            }}
          />
          <stop
            offset={0.57}
            style={{
              stopColor: '#3e863d',
            }}
          />
          <stop
            offset={0.72}
            style={{
              stopColor: '#619857',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#76ac64',
            }}
          />
        </linearGradient>
        <path
          style={{
            clipPath: 'url(#XMLID_40_)',
            fill: 'url(#SVGID_2_)',
          }}
          d="m121.8 220.7 69.1 93.6 91.5-67.5-69.2-93.7z"
        />
      </g>
      <g id="XMLID_19_">
        <defs>
          <path
            id="XMLID_20_"
            d="M201.8 189.3c-.6.1-1.2.2-1.7.5l-34.7 20 37.4 68.1c.5-.1 1-.2 1.5-.5l34.8-20.1c1.1-.6 1.8-1.7 2-2.9l-38.1-65c-.3-.1-.6-.1-.8-.1h-.4"
          />
        </defs>
        <clipPath id="XMLID_41_">
          <use
            xlinkHref="#XMLID_20_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <linearGradient
          id="SVGID_3_"
          gradientUnits="userSpaceOnUse"
          x1={0.13}
          y1={0.284}
          x2={0.749}
          y2={0.284}
          gradientTransform="translate(149.546 198.963) scale(122.2438)"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#6bbf47',
            }}
          />
          <stop
            offset={0.16}
            style={{
              stopColor: '#6bbf47',
            }}
          />
          <stop
            offset={0.38}
            style={{
              stopColor: '#79b461',
            }}
          />
          <stop
            offset={0.47}
            style={{
              stopColor: '#75ac64',
            }}
          />
          <stop
            offset={0.7}
            style={{
              stopColor: '#659e5a',
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopColor: '#3e863d',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#3e863d',
            }}
          />
        </linearGradient>
        <path
          style={{
            clipPath: 'url(#XMLID_41_)',
            fill: 'url(#SVGID_3_)',
          }}
          d="M165.5 189.3h75.6v88.6h-75.6z"
        />
      </g>
    </g>
  </svg>
)

export const Elasticsearch = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    className={`${props.sizeClasses || 'h-16 w-16'} ${props.className || ''}`}
  >
    <path
      d="M51.9 144h339.8c37.5 0 70.9-17.2 93.3-44C438.2 39.2 364.8 0 282.1 0 180.9 0 93.4 58.8 51.9 144"
      style={{
        fill: '#f0bf1a',
      }}
    />
    <path
      d="M362.9 184H36.4c-6.7 22.8-10.3 47-10.3 72s3.7 49.2 10.3 72h326.5c39.2 0 72-32 72-72s-32-72-72-72"
      style={{
        fill: '#07a5de',
      }}
    />
    <path
      d="M485.9 410.9c-22.3-26.2-55.5-42.9-92.6-42.9H51.9c41.5 85.2 129 144 230.2 144 83.2 0 157-39.7 203.8-101.1"
      style={{
        fill: '#3ebeb0',
      }}
    />
    <path
      d="M36.4 184c-6.7 22.8-10.3 47-10.3 72s3.7 49.2 10.3 72h213.7c5.6-21.6 8.8-45.6 8.8-72s-3.2-50.4-8.8-72H36.4z"
      style={{
        fill: '#231f20',
      }}
    />
    <path
      d="M153.3 34.4C110.1 60 74.1 98.4 51.7 144h188.8c-19.2-44-49.6-80.8-87.2-109.6"
      style={{
        fill: '#d7a229',
      }}
    />
    <path
      d="M161.3 481.6c36.8-29.6 66.4-68.8 84.8-113.6H51.7c24 48 62.4 88 109.6 113.6"
      style={{
        fill: '#019b8f',
      }}
    />
  </svg>
)
