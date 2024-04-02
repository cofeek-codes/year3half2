const HeaderAuth = () => {
	return (
		<>
			<div className="header__auth">
				<button className="btn__register">
					<img alt="user-plus" src="/src/assets/user-plus.png" />
					<span>Регистрация</span>
				</button>
				<button className="btn__login">Вход</button>
			</div>
		</>
	);
};

export default HeaderAuth;
