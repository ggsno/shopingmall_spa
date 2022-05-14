export default function Cart({ $target, initialState }) {
    this.state = initialState;
    this.$element = document.createElement("div");
    this.$element.className = "CartPage";
    $target.appendChild(this.$element);
    this.setState = (nextState) => {
        this.state = {...this.state, ...nextState};
        this.render();
    }
    this.render = () => {
        const { items } = this.state;
        this.$element.innerHTML = `
        <h1>장바구니</h1>
        <ul>
            ${items.map(({name, imgUrl, price, option, count }) => `
                <li class="Cart__item">
                    <img src="${imgUrl}">
                    <div class="Cart__itemDesription">
                        <div>${name} ${option} ${price.toLocaleString("ko-KR")}원 ${count}개</div>
                        <div>${(price * count).toLocaleString("ko-KR")}원~</div>
                    </div>
                </li>
            `).join("")}
        </ul>`
    }
}