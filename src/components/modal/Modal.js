import React from "react";
import './index.scss'
import { RiCloseLine } from "react-icons/ri";
import Checkbox from "../checkbox/Checkbox"

const Modal = ({ setIsOpen }) => {
  const Img = "https://www.gstatic.com/instantbuy/svg/dark_gpay.svg"
  const Img2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h2 className="heading">Buy me a coffee</h2>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <form action="" className="Buy-me-a-coffee-form" id="Myform">
              <h2 className="Contact-Info">Contact Information</h2>
              <input type="text" placeholder="Email" className="Contact-info-email" />
              <div className="check-box-text">
                <Checkbox />
                <p className="Email-me-with-news">Email me with news and offers</p>
              </div>
              <div className="dual-input">
                <input type="text" name="" id="first-input" placeholder="First name (optional)" />
                <input type="text" name="" id="second-input" placeholder="Last name" />
              </div>

              <div className="Adress-cont">
                <input type="text" id="third-input" placeholder="Address" />
              </div>

            </form>

            <div className="payment-container">
              <h1>Buy me a coffee</h1>

              <div className="payment-method">
                <p>Experess checkout</p>
                <div className="payment-companies">
                  <a href="https://www.wionstore.com/checkouts/c/78d15faae99e5508485555cf1f9fb627?payment=shop_pay&amp;redirect_source=direct_checkout_checkout" class="_2Adtq" aria-label="Shop Pay"><svg preserveAspectRatio="xMidYMid" viewBox="0 0 424 102" fill="inherit" className="Shopay" title="Shop Pay">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M204.916 30.1c3.978-4.92 10.15-8.998 17.52-8.998 16.544 0 29.576 13.696 29.565 30.595 0 17.61-13.096 30.64-28.81 30.64-8.355 0-14.75-4.277-17.087-7.845h-.222v25.864a.585.585 0 01-.586.589h-14.727a.598.598 0 01-.6-.587v-78.68c0-.16.064-.31.177-.422a.594.594 0 01.423-.175h13.763a.59.59 0 01.415.18c.11.11.17.26.17.418V30.1zm16.263 37.243a15.623 15.623 0 01-11.66-4.689 15.628 15.628 0 01-4.2-13.715 15.61 15.61 0 0115.831-12.812 15.345 15.345 0 0110.777 4.61 15.348 15.348 0 014.37 10.957 15.46 15.46 0 01-1.086 5.93 15.413 15.413 0 01-14.033 9.716z"></path><path d="M109.306 32.87c-3.402-7.136-9.852-11.746-19.57-11.746a19.486 19.486 0 00-15.304 7.868l-.354.432V1.454a.604.604 0 00-.18-.43.603.603 0 00-.43-.18h-13.74a.61.61 0 00-.599.61v80.23a.595.595 0 00.596.598h14.717a.612.612 0 00.61-.598v-34.21c0-6.647 4.433-11.357 11.525-11.357 7.757 0 9.718 6.383 9.718 12.888v32.68a.599.599 0 00.6.597h14.683a.61.61 0 00.61-.598v-34.63c0-1.185 0-2.35-.155-3.48a30.623 30.623 0 00-2.726-10.704zm-73.48 11.89s-7.49-1.76-10.25-2.47c-2.76-.71-7.58-2.217-7.58-5.863 0-3.646 3.89-4.81 7.833-4.81 3.944 0 8.332.954 8.675 5.33a.63.63 0 00.631.575l14.505-.055a.636.636 0 00.456-.198.631.631 0 00.164-.467c-.898-14.008-13.187-19.017-24.523-19.017-13.44 0-23.27 8.865-23.27 18.64 0 7.136 2.016 13.83 17.873 18.483 2.782.81 6.56 1.862 9.863 2.78 3.967 1.11 6.105 2.783 6.105 5.42 0 3.06-4.43 5.186-8.786 5.186-6.305 0-10.782-2.338-11.148-6.538a.636.636 0 00-.632-.555l-14.472.067a.63.63 0 00-.632.653c.666 13.22 13.432 20.346 25.334 20.346 17.73 0 25.742-9.973 25.742-19.315.022-4.388-.987-14.384-15.89-18.196zm110.558-27.116c-13.73 0-20.578 4.666-26.074 8.4l-.167.11c-.283.195-.483.49-.56.823-.075.335-.02.687.15.984l5.43 9.355c.102.175.24.325.408.44a1.41 1.41 0 001.146.199c.192-.052.37-.146.52-.275l.433-.356c2.824-2.372 7.357-5.54 18.327-6.405 6.106-.49 11.38 1.107 15.27 4.742 4.278 3.945 6.838 10.316 6.838 17.043 0 12.378-7.292 20.157-19.005 20.312-9.653-.055-16.135-5.086-16.135-12.522 0-3.945 1.784-6.516 5.263-9.087.266-.19.454-.47.53-.788a1.356 1.356 0 00-.12-.94l-4.876-9.22a1.43 1.43 0 00-1.423-.734c-.19.025-.376.09-.54.19-5.474 3.247-12.19 9.186-11.824 20.6.443 14.528 12.522 25.62 28.224 26.075h1.863c18.66-.61 32.136-14.46 32.136-33.244 0-17.242-12.568-35.704-35.817-35.704z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M282.375 1.044h125.652c8.672 0 15.703 7.03 15.703 15.703V85.54c0 8.672-7.03 15.702-15.703 15.702H282.375c-8.672 0-15.702-7.03-15.702-15.702V16.747c0-8.673 7.03-15.703 15.702-15.703zm28.19 54.488c10.484 0 17.986-7.647 17.986-18.362 0-10.66-7.5-18.35-17.983-18.35H292.06a.827.827 0 00-.831.83v50.786c0 .22.09.43.245.585a.836.836 0 00.584.248h6.96a.827.827 0 00.829-.831V56.363a.832.832 0 01.831-.831h9.885zm-.53-29c5.695 0 9.895 4.5 9.895 10.638 0 6.15-4.2 10.638-9.896 10.638h-9.352a.829.829 0 01-.832-.82V27.363a.844.844 0 01.832-.831h9.352zM330.6 61.526a9.903 9.903 0 01.988-4.757 9.86 9.86 0 013.136-3.71c2.704-2.03 6.892-3.08 13.11-3.325l6.592-.222v-1.95c0-3.89-2.615-5.54-6.815-5.54-4.197 0-6.846 1.484-7.466 3.91a.803.803 0 01-.798.577h-6.505a.802.802 0 01-.634-.277.81.81 0 01-.196-.664c.974-5.764 5.74-10.14 15.9-10.14 10.794 0 14.683 5.02 14.683 14.604V70.4a.792.792 0 01-.06.32.822.822 0 01-.77.523h-6.572a.842.842 0 01-.59-.244.845.845 0 01-.24-.595v-1.52a.634.634 0 00-.09-.38.633.633 0 00-.3-.25.644.644 0 00-.39-.02.626.626 0 00-.327.22c-1.962 2.137-5.153 3.69-10.24 3.69-7.457.02-12.41-3.88-12.41-10.617zm23.826-4.433V55.52l-8.532.444c-4.5.232-7.126 2.105-7.126 5.252 0 2.848 2.405 4.433 6.594 4.433 5.696 0 9.064-3.083 9.064-8.546v-.01zm14.772 23.626v5.927a.855.855 0 00.609.864c1.16.317 2.357.463 3.558.434 6.37 0 12.19-2.327 15.514-11.392l14.625-39.018a.846.846 0 00-.113-.753.848.848 0 00-.675-.354H395.9a.831.831 0 00-.798.577l-8.056 24.71a.832.832 0 01-.314.4c-.143.1-.312.152-.485.152s-.34-.053-.484-.15a.886.886 0 01-.313-.4l-9.286-24.78a.849.849 0 00-.31-.39.847.847 0 00-.477-.152h-6.648a.844.844 0 00-.786 1.109L381.62 72.63a.82.82 0 010 .565l-.432 1.363a7.878 7.878 0 01-7.945 5.621 16.409 16.409 0 01-3.048-.29.847.847 0 00-.996.834z"></path></svg></a>
                  

                  <div className="gpay-button-fill">
                    <button type="button" aria-label="Google Pay" className="gpay-button black plain short en"><img src= {Img} alt="" /></button>
                  </div>

                  <div className="gpay-button-fill">
                    <button type="button" aria-label="Google Pay" className="gpay-button yellow plain short en"><img src= {Img2} alt="" /></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;