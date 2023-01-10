import useTheme from 'hooks/useTheme'

function FarmIcon({ size }: { size?: number }) {
  const theme = useTheme()
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.2501 11.25H0.75C0.335999 11.25 0 10.914 0 10.5C0 10.086 0.335999 9.75 0.75 9.75H10.2501C10.6641 9.75 11.0001 10.086 11.0001 10.5C11.0001 10.914 10.6641 11.25 10.2501 11.25Z"
          fill={theme.lightGreen}
        />
        <path
          d="M6.50006 15C6.30798 15 6.11609 14.9269 5.96997 14.7801C5.677 14.4869 5.677 14.012 5.96997 13.719L9.19006 10.4991L5.96997 7.28009C5.677 6.98694 5.677 6.51196 5.96997 6.21899C6.26294 5.92603 6.73792 5.92603 7.03107 6.21899L10.7811 9.96899C11.074 10.262 11.074 10.7369 10.7811 11.0301L7.03107 14.7801C6.88403 14.9269 6.69196 15 6.50006 15Z"
          fill={theme.lightGreen}
        />
        <path
          d="M15.9999 23.9999C14.8969 23.9999 14 23.1028 14 21.9998V3.99981C14 3.14489 14.544 2.38189 15.3539 2.10082L21.3619 0.0978305C22.7059 -0.314157 23.9999 0.682853 23.9999 1.99993V19.9999C23.9999 20.8539 23.4559 21.6158 22.647 21.8978L16.6369 23.9019C16.4179 23.9698 16.215 23.9999 15.9999 23.9999ZM21.9999 1.49987C21.9349 1.49987 21.8799 1.50793 21.821 1.52587L15.838 3.5208C15.6419 3.58892 15.5 3.78686 15.5 3.99981V21.9998C15.5 22.3409 15.8699 22.5709 16.179 22.4739L22.1619 20.4789C22.3569 20.4108 22.4999 20.2129 22.4999 19.9999V1.99993C22.4999 1.72491 22.276 1.49987 21.9999 1.49987Z"
          fill={theme.primary}
        />
        <path
          d="M8.75 5.00006C8.336 5.00006 8 4.66406 8 4.25006V2.75006C8 1.23303 9.23285 0 10.7499 0H21.9999C22.4139 0 22.7499 0.335999 22.7499 0.75C22.7499 1.164 22.4139 1.5 21.9999 1.5H10.7499C10.0609 1.5 9.5 2.06104 9.5 2.75006V4.25006C9.5 4.66406 9.164 5.00006 8.75 5.00006Z"
          fill={theme.primary}
        />
        <path
          d="M14.75 21H10.7499C9.23285 21 8 19.767 8 18.2499V16.7499C8 16.3359 8.336 15.9999 8.75 15.9999C9.164 15.9999 9.5 16.3359 9.5 16.7499V18.2499C9.5 18.939 10.0609 19.5 10.7499 19.5H14.75C15.164 19.5 15.5 19.836 15.5 20.25C15.5 20.664 15.164 21 14.75 21Z"
          fill={theme.primary}
        />
      </svg>
    </svg>
  )
}

export default FarmIcon
