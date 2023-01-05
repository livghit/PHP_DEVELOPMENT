import React from "react";

export default function MobileNavigation() {
  return (
    <>
      <div className="md:hidden ">
        <MenuIcon style="w-10 h-10" />
      </div>
      <div className="fixed right-5 top-6 md:top-3 ">
        <CartIcon style="w-8 h-8" />
      </div>
      <div className="fixed right-16 top-6 md:top-3">
        <HeartIcon style="w-8 h-8" />
      </div>
    </>
  );
}

function MenuIcon(props) {
  const style = props.style;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
          <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        >
        </path>
      </svg>
    </>
  );
}

function CartIcon(props) {
  const style = props.style;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class= {style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
        </path>
      </svg>
    </>
  );
}

function HeartIcon(props) {
  const style = props.style;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        >
        </path>
      </svg>
    </>
  );
}
