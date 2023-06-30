const CashOutUseCase = (banckAccount, value) => {
    return banckAccount.removeFromBalance(value)
}

export default CashOutUseCase