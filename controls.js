class Controls{
    constructor(){
        this.keyUp = false;
        this.keyDown = false;
        this.keyLeft = false;
        this.keyRight = false;

        this.#addKeyboardListners();
    }

    #addKeyboardListners(){
        document.onkeydown=(event) =>{
            switch(event.key){
                case 'ArrowUp':
                    this.keyUp=true;
                    break;
                case 'ArrowDown':
                    this.keyDown=true;
                    break;
                case 'ArrowLeft':
                    this.keyLeft=true;
                    break;
                case 'ArrowRight':
                    this.keyRight=true;
                    break;
            }
        };

        document.onkeyup=(event) =>{
            switch(event.key){
                case 'ArrowUp':
                    this.keyUp=false;
                    break;
                case 'ArrowDown':
                    this.keyDown=false;
                    break;
                case 'ArrowLeft':
                    this.keyLeft=false;
                    break;
                case 'ArrowRight':
                    this.keyRight=false;
                    break;
            }
        };
    }

}