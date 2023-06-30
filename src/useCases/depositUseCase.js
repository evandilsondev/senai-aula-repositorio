const DepositUseCase = (banckAccount, value) => {
    banckAccount.addToBalance(value)
}

export default DepositUseCase
