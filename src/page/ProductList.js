export default function ProductList({ $target, initialState, onClick }) {
    this.state = initialState;
    this.$element = document.createElement("div");
    this.$element.className = "ProductListPage";
    $target.appendChild(this.$element);
    this.setState = (nextState) => {
        this.state = {...this.state, ...nextState};
        this.render();
    }
    this.$element.addEventListener("click", (e) => {
        onClick(e.target.closest(".Product").dataset.id);
    })
    this.render = () => {
        this.$element.innerHTML = `
        <h1>상품목록</h1>
        <ul>
            ${this.state.items.map(({ id, name, imageUrl, price }) => `
                <li class="Product" data-id="${id}">
                    <img src="${imageUrl}">
                    <div class="Product__info">
                        <div>${name}</div>
                        <div>${price.toLocaleString("ko-KR")}원~</div>
                    </div>
                </li>
            `).join("")}
        </ul>`;
    }
}