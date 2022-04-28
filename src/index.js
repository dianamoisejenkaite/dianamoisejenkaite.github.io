import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      '@font-face': [
        {
          fontFamily: `'Quicksand-Regular'`,
          fontStyle: 'normal',
          fontWeight: 400,
          fontDisplay: 'swap',
          src: `url('/fonts/Quicksand-Regular.ttf') format('opentype')`,
        },{
          fontFamily: `'Quicksand-Medium'`,
          fontStyle: 'normal',
          fontWeight: 500,
          fontDisplay: 'swap',
          src: `url('/fonts/Quicksand-Medium.ttf') format('opentype')`,
        },
      ],
    }),
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
