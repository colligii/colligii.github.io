class ExpirenceBar {

    constructor() {
        this.expirenceContainers = Array.from(document.querySelectorAll('.expirence-container'))
        this.expirenceRankContainer = document.querySelector('.expirence-rank-container')
        this.mountBar();
        this.mountExpirenceContainers();
    }

    mountExpirenceContainers() {
        this.expirenceContainers.forEach(elem => {
            const ball = document.createElement('div');
            ball.style.top = elem.offsetTop+5+'px';
            ball.classList.add('ball')
            this.expirenceRankContainer.append(ball);
        })
    }

    mountBar() {
        const expirenceBarElement = document.createElement('div');
        expirenceBarElement.classList.add('expirence-bar')
        this.expirenceRankContainer.append(expirenceBarElement)
    }

}

new ExpirenceBar();