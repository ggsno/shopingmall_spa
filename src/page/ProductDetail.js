export default function ProductDetail({ $target, initialState, onChange }) {
    this.state = initialState;
    this.$element = document.createElement("div");
    this.$element.className = "ProductDetailPage";
    $target.appendChild(this.$element);
    this.onChange = onChange;
    this.setState = (nextState) => {
        this.state = {...this.state, ...nextState};
        this.render();
    }
    this.render = () => {
        const { name, imageUrl, price, productOptions, selected, totalPrice } = this.state;
        this.$element.innerHTML = `
        <h1>${name}상품 정보</h1>
        <div class="ProductDetail">
            <img src="${imageUrl}">
            <div class="ProductDetail__info">
                <h2>${name}</h2>
                <div class="ProductDetail__price">${price.toLocaleString("ko-KR")}원~</div>
                <select>
                    <option>선택하세요.</option>
                    ${productOptions.map(opt => `
                        <option ${opt.stock ? "" : "disabled"}>
                            ${opt.stock ? "" : "(품절)"} ${opt.name} ${(opt.stock && opt.price) ? `(+${opt.price.toLocaleString("ko-KR")}원)`: ""}
                        </option>
                    `).join("")}
                </select>
                <div class="ProductDetail__selectedOptions">
                ${selected ? `
                    <h3>선택된 상품</h3>
                    <ul>
                        ${selected.map(({name, option, price }) => `
                            <li>
                                ${name} ${option} ${price.toLocaleString("ko-KR")}원 <div><input type="number" value="0">개</div>
                            </li>
                        `)}
                    </ul>`: ""}
                <div class="ProductDetail__totalPrice">${totalPrice.toLocaleString("ko-KR")}원</div>
                <button class="OrderButton">주문하기</button>
            </div>
        </div>
        `
        document.querySelector("select").addEventListener("change", (e) => {
            console.log(e.target);
            this.onChange();
        })
    }
}