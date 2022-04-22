import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"
import { useStateContext } from '../../HBOProvider';
import Link from 'next/link';




const Header = (props) => {
  const globalState = useStateContext();
  // console.log(globalState);

  return (
    <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
      <div className="top-header__left-side">
        <div
          onClick={() => globalState.setSideNavOpenAction(true)}
          className="top-header__menu-btn"
        >
          <i className="fas fa-bars" />
        </div>
        <div
          onClick={() => globalState.setSearchOpenAction(true)}
          className="top-header__search-btn"
        >
          <i className="fas fa-search" />
        </div>
      </div>

      <Link href='/'>
        <a>
          <div className="top-header__logo"></div>
        </a>
      </Link>

      <div
        onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}
        className="top-header__account"
      >
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-white-dog-breeds-maltese-1560293184.jpg?crop=1.00xw:0.663xh;0,0.337xh&resize=480:*" className="top-header__user-img" />
        <div className="top-header__user-name">Cookie</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  )
}

export default Header;