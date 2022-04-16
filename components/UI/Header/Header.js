import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"


const Header = (props) => {
  return (<header className="top-header">
    <div className="top-header__left-side">
      <div className="top-header__menu-btn">
        <i className="fas fa-bars" />
      </div>
      <div className="top-header__search-btn">
        <i className="fas fa-search" />
      </div>
    </div>
    <div className="top-header__logo"></div>
    <div className="top-header__account">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-white-dog-breeds-maltese-1560293184.jpg?crop=1.00xw:0.663xh;0,0.337xh&resize=480:*" className="top-header__user-img" />
      <div className="top-header__user-name">Cookie</div>
    </div>
    <Account />
    <SearchModal />
  </header>)
}

export default Header;