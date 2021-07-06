import { useState } from "react";
import OrdersList from "./components/OrdersList";
import DishList from "./components/DishList";
import CustomerList from "./components/CustomerList";
import PaymentList from "./components/PaymentList";
import LogoSvg from './assets/images/app-logo.svg'
import userPng from './assets/images/user.png'

function App() {
  //Donnée State :

  //------------------Orders -------------------
  const [orders,] = useState([
    {code: "000001", status: "Terminée", date:"01/01/2021 12:00" },
    {code: "000002", status: "Terminée", date:"01/01/2021 12:04" },
    {code: "000003", status: "En cours de cuisson", date:"01/01/2021 12:21" },
    {code: "000004", status: "En attente", date:"01/01/2021 12:45" }
  ])

  //----------------Dishes-------------------------
  const [dishes,] = useState([
    {name: "4 Fromages", description: "Mozzarella, parmesan, gorgonzola, emmental", price:"11.50" },
    {name: "Pizza Vegan", description: "Base tomate, fromage vegan, tofu, tomate, olives", price:"12.20" },
    {name: "Pizza Savoyarde", description: "Reblochon, jambon, origan, pommes de terre", price:"10.90" },
    {name: "Sex on the Beach", description: "Jus de cranberry, jus d'ananas, liqueur de pêche, vodka", price:"6.90" },
    {name: "Coca-Cola", description: "La boisson du diabète", price:"3.50" },
    {name: "Desperados", description: "Moins cher que la vraie tequila (ne venez pas vous plaindre que ça a pas le même goût)", price:"4.00" },
    {name: "Belzebuth", description: "Variantes disponibles : Triple / Rouge / Blonde / Pink / Blanche", price:"5.00" },
  ])

  //---------------Cust-------------
  const [custs,]= useState([
    {lastname: "Rabica", firstname: "Della", email:"vroumcvvite@manjaromasterrace.fr", address:"3 impasse des cochons, Emerchicourt", phone:"08 36 65 65 65" },
    {lastname: "Martin", firstname: "Jean-Charles", email:"fiatmultipla@yahoo.com", address:"19 rue des buveurs, Calais", phone:"08 00 77 24 24" },
    {lastname: "Tofeurr", firstname: "Chris", email:"cricrilebg@email.fr", address:"32 boulevard du tuning, Lille", phone:"08 12 12 12 12" },
  ])

  //-------------Payment------------
  const [payments,]= useState([
    {name:"Carte Bancaire"},
    {name:"Chéque"},
    {name:"Espèces"},
    {name:"Virement Paypal"},
    {name:"Alipay"},
    {name:"Pass Culture"},
  ])

  //HTML
  return (
    <div classNameName="App">
      <div>
        <title>Restaurant dashboard</title>

        <link rel="shortcut icon" href="favicon.ico" />

        <script defer src="assets/plugins/fontawesome/js/all.min.js"></script>

        <link id="theme-style" rel="stylesheet" href="assets/css/portal.css" />
      </div>

      <body className="app">
        <header className="app-header fixed-top">
          <div className="app-header-inner">
            <div className="container-fluid py-2">
              <div className="app-header-content">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <a
                      id="sidepanel-toggler"
                      className="sidepanel-toggler d-inline-block d-xl-none"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        role="img"
                      >
                        <title>Menu</title>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M4 7h22M4 15h22M4 23h22"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="search-mobile-trigger d-sm-none col">
                    <i className="search-mobile-trigger-icon fas fa-search"></i>
                  </div>
                  <div className="app-search-box col">
                    <form className="app-search-form">
                      <input
                        type="text"
                        placeholder="Search..."
                        name="search"
                        className="form-control search-input"
                      />
                      <button
                        type="submit"
                        className="btn search-btn btn-primary"
                        value="Search"
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>

                  <div className="app-utilities col-auto">
                    <div className="app-utility-item app-notifications-dropdown dropdown">
                      <a
                        className="dropdown-toggle no-toggle-arrow"
                        id="notifications-dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                        title="Notifications"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-bell icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                          <path
                            fill-rule="evenodd"
                            d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                          />
                        </svg>
                        <span className="icon-badge">3</span>
                      </a>

                      <div
                        className="dropdown-menu p-0"
                        aria-labelledby="notifications-dropdown-toggle"
                      >
                        <div className="dropdown-menu-header p-3">
                          <h5 className="dropdown-menu-title mb-0">
                            Notifications
                          </h5>
                        </div>
                        <div className="dropdown-menu-content">
                          <div className="item p-3">
                            <div className="row gx-2 justify-content-between align-items-center">
                              <div className="col-auto">
                                <img
                                  className="profile-image"
                                  src="assets/images/profiles/profile-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="col">
                                <div className="info">
                                  <div className="desc">
                                    Amy shared a file with you. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.{" "}
                                  </div>
                                  <div className="meta"> 2 hrs ago</div>
                                </div>
                              </div>
                            </div>
                            <a className="link-mask" href="notifications.html"></a>
                          </div>
                          <div className="item p-3">
                            <div className="row gx-2 justify-content-between align-items-center">
                              <div className="col-auto">
                                <div className="app-icon-holder">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-receipt"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="col">
                                <div className="info">
                                  <div className="desc">
                                    You have a new invoice. Proin venenatis
                                    interdum est.
                                  </div>
                                  <div className="meta"> 1 day ago</div>
                                </div>
                              </div>
                            </div>
                            <a className="link-mask" href="notifications.html"></a>
                          </div>
                          <div className="item p-3">
                            <div className="row gx-2 justify-content-between align-items-center">
                              <div className="col-auto">
                                <div className="app-icon-holder icon-holder-mono">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-bar-chart-line"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="col">
                                <div className="info">
                                  <div className="desc">
                                    Your report is ready. Proin venenatis
                                    interdum est.
                                  </div>
                                  <div className="meta"> 3 days ago</div>
                                </div>
                              </div>
                            </div>
                            <a className="link-mask" href="notifications.html"></a>
                          </div>
                          <div className="item p-3">
                            <div className="row gx-2 justify-content-between align-items-center">
                              <div className="col-auto">
                                <img
                                  className="profile-image"
                                  src="assets/images/profiles/profile-2.png"
                                  alt=""
                                />
                              </div>
                              <div className="col">
                                <div className="info">
                                  <div className="desc">
                                    James sent you a new message.
                                  </div>
                                  <div className="meta"> 7 days ago</div>
                                </div>
                              </div>
                            </div>
                            <a className="link-mask" href="notifications.html"></a>
                          </div>
                        </div>

                        <div className="dropdown-menu-footer p-2 text-center">
                          <a href="notifications.html">View all</a>
                        </div>
                      </div>
                    </div>
                    <div className="app-utility-item">
                      <a href="settings.html" title="Settings">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-gear icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                          />
                        </svg>
                      </a>
                    </div>

                    <div className="app-utility-item app-user-dropdown dropdown">
                      <a
                        className="dropdown-toggle"
                        id="user-dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        <img src={userPng} alt="user profile" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="user-dropdown-toggle"
                      >
                        <li>
                          <a className="dropdown-item" href="account.html">
                            Account
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="settings.html">
                            Settings
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="app-sidepanel" className="app-sidepanel ">
            <div id="sidepanel-drop" className="sidepanel-drop"></div>
            <div className="sidepanel-inner d-flex flex-column">
              <a
                href="#"
                id="sidepanel-close"
                className="sidepanel-close d-xl-none"
              >
                &times;
              </a>
              <div className="app-branding">
                <a className="app-logo" href="index.html">
                  <img
                    className="logo-icon me-2"
                    src={LogoSvg}
                    alt="logo"
                  />
                  <span className="logo-text">PORTAL</span>
                </a>
              </div>
              <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                <ul
                  className="app-menu list-unstyled accordion"
                  id="menu-accordion"
                >
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-house-door"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Overview</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="docs.html">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-folder"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                          <path
                            fill-rule="evenodd"
                            d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Docs</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="orders.html">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-card-list"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                          />
                          <circle cx="3.5" cy="5.5" r=".5" />
                          <circle cx="3.5" cy="8" r=".5" />
                          <circle cx="3.5" cy="10.5" r=".5" />
                        </svg>
                      </span>
                      <span className="nav-link-text">Orders</span>
                    </a>
                  </li>
                  <li className="nav-item has-submenu">
                    <a
                      className="nav-link submenu-toggle"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1"
                      aria-expanded="false"
                      aria-controls="submenu-1"
                    >
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-files"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"
                          />
                          <path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
                        </svg>
                      </span>
                      <span className="nav-link-text">Pages</span>
                      <span className="submenu-arrow">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-chevron-down"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      id="submenu-1"
                      className="collapse submenu submenu-1"
                      data-bs-parent="#menu-accordion"
                    >
                      <ul className="submenu-list list-unstyled">
                        <li className="submenu-item">
                          <a className="submenu-link" href="notifications.html">
                            Notifications
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a className="submenu-link" href="account.html">
                            Account
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a className="submenu-link" href="settings.html">
                            Settings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item has-submenu">
                    <a
                      className="nav-link submenu-toggle"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-2"
                      aria-expanded="false"
                      aria-controls="submenu-2"
                    >
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-columns-gap"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">External</span>
                      <span className="submenu-arrow">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-chevron-down"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      id="submenu-2"
                      className="collapse submenu submenu-2"
                      data-bs-parent="#menu-accordion"
                    >
                      <ul className="submenu-list list-unstyled">
                        <li className="submenu-item">
                          <a className="submenu-link" href="login.html">
                            Login
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a className="submenu-link" href="signup.html">
                            Signup
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a className="submenu-link" href="reset-password.html">
                            Reset password
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a className="submenu-link" href="404.html">
                            404 page
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-bar-chart-line"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Charts</span>
                    </a>
                  </li>
                  <li className="nav-item"></li>

                  <a className="nav-link" href="help.html">
                    <span className="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-question-circle"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Help</span>
                  </a>
                </ul>
              </nav>
              <div className="app-sidepanel-footer">
                <nav className="app-nav app-nav-footer">
                  <ul className="app-menu footer-menu list-unstyled">
                    <li className="nav-item">
                      <a className="nav-link" href="settings.html">
                        <span className="nav-icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-gear"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                            />
                          </svg>
                        </span>
                        <span className="nav-link-text">Settings</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                      >
                        <span className="nav-icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-download"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                            />
                          </svg>
                        </span>
                        <span className="nav-link-text">Download</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/"
                      >
                        <span className="nav-icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-file-person"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            />
                          </svg>
                        </span>
                        <span className="nav-link-text">License</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="app-wrapper">
          <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
              <div className="row g-3 mb-4 align-items-center justify-content-between">
                <div className="col-auto">
                  <h1 className="app-page-title mb-0">Tableaux récapitulatifs</h1>
                </div>
                <div className="col-auto">
                  <div className="page-utilities">
                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                      <div className="col-auto">
                        <form className="table-search-form row gx-1 align-items-center">
                          <div className="col-auto">
                            <input
                              type="text"
                              id="search-orders"
                              name="searchorders"
                              className="form-control search-orders"
                              placeholder="Search"
                            />
                          </div>
                          <div className="col-auto">
                            <button type="submit" className="btn app-btn-secondary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-auto">
                        <select className="form-select w-auto">
                          <option selected value="option-1">
                            All
                          </option>
                          <option value="option-2">This week</option>
                          <option value="option-3">This month</option>
                          <option value="option-4">Last 3 months</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <a className="btn app-btn-secondary" href="#">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-download me-1"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                            />
                          </svg>
                          Download CSV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav
                id="orders-table-tab"
                className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
              >
                <a
                  className="flex-sm-fill text-sm-center nav-link active"
                  id="orders-all-tab"
                  data-bs-toggle="tab"
                  href="#orders-all"
                  role="tab"
                  aria-controls="orders-all"
                  aria-selected="true"
                >
                  Commandes
                </a>

              </nav>
              <div className="tab-content" id="orders-table-tab-content">
              <div
                className="tab-pane fade show active"
                id="orders-all"
                role="tabpanel"
                aria-labelledby="orders-all-tab"
              >
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                  <div className="app-card-body">
                    <div className="table-responsive">
                      <table className="table app-table-hover mb-0 text-left">
                        <thead>
                          <tr>
                            <th className="cell">Code</th>
                            <th className="cell">Statut</th>
                            <th className="cell">Date</th>
                            <th className="cell"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            orders.map(order => {
                              return <OrdersList code={order.code} status={order.status} date={order.date}/>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          </div>
          <nav
              id="orders-table-tab"
              className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
            >
              <a
                className="flex-sm-fill text-sm-center nav-link active"
                id="orders-all-tab"
                data-bs-toggle="tab"
                href="#orders-all"
                role="tab"
                aria-controls="orders-all"
                aria-selected="true"
              >
                Plats et boissons
              </a>
              {/* <a className="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Paid</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pending</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</a> */}
            </nav>
            <div className="tab-content" id="orders-table-tab-content">
              <div
                className="tab-pane fade show active"
                id="orders-all"
                role="tabpanel"
                aria-labelledby="orders-all-tab"
              >
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                  <div className="app-card-body">
                    <div className="table-responsive">
                      <table className="table app-table-hover mb-0 text-left">
                        <thead>
                          <tr>
                            <th className="cell">Nom</th>
                            <th className="cell">Description</th>
                            <th className="cell">Prix</th>
                            <th className="cell"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            dishes.map(dishe => {
                              return <DishList name={dishe.name} description={dishe.description} price={dishe.price}/>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav
              id="orders-table-tab"
              className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
            >
              <a
                className="flex-sm-fill text-sm-center nav-link active"
                id="orders-all-tab"
                data-bs-toggle="tab"
                href="#orders-all"
                role="tab"
                aria-controls="orders-all"
                aria-selected="true"
              >
                Clients
              </a>
              {/* <a className="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Paid</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pending</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</a> */}
            </nav>
            <div className="tab-content" id="orders-table-tab-content">
              <div
                className="tab-pane fade show active"
                id="orders-all"
                role="tabpanel"
                aria-labelledby="orders-all-tab"
              >
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                  <div className="app-card-body">
                    <div className="table-responsive">
                      <table className="table app-table-hover mb-0 text-left">
                        <thead>
                          <tr>
                            <th className="cell">Nom de famille</th>
                            <th className="cell">Prénom</th>
                            <th className="cell">Mail</th>
                            <th className="cell">Adresse</th>
                            <th className="cell">N° de téléphone</th>
                            <th className="cell"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            custs.map(cust =>{
                              return <CustomerList lastname={cust.lastname} firstname={cust.firstname} email={cust.email} address={cust.address} phone={cust.phone}/>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav
              id="orders-table-tab"
              className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4"
            >
              <a
                className="flex-sm-fill text-sm-center nav-link active"
                id="orders-all-tab"
                data-bs-toggle="tab"
                href="#orders-all"
                role="tab"
                aria-controls="orders-all"
                aria-selected="true"
              >
                Moyen de paiement
              </a>
              {/* <a className="flex-sm-fill text-sm-center nav-link"  id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Paid</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pending</a>
				    <a className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</a> */}
            </nav>
            <div className="tab-content" id="orders-table-tab-content">
              <div
                className="tab-pane fade show active"
                id="orders-all"
                role="tabpanel"
                aria-labelledby="orders-all-tab"
              >
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                  <div className="app-card-body">
                    <div className="table-responsive">
                      <table className="table app-table-hover mb-0 text-left">
                        <thead>
                          <tr>
                            <th className="cell">Nom</th>
                            <th className="cell"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            payments.map(pay => {
                              return <PaymentList name={pay.name}/>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>

          <footer className="app-footer">
            <div className="container text-center py-3">
              <small className="copyright">
                Designed with{" "}
                <i className="fas fa-heart" ></i> by{" "}
                <a
                  className="app-link"
                  href="http://themes.3rdwavemedia.com"
                  target="_blank"
                >
                  Xiaoying Riley
                </a>{" "}
                for developers
              </small>
            </div>
          </footer>
        </div>

        <script src="assets/plugins/popper.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

        <script src="assets/js/app.js"></script>
      </body>
    </div>
  );
}

export default App;
