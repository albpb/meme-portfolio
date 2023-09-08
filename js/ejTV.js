class TV {
    constructor(brand) {
        this.brand = brand;
        this.resetTV();
    }

    incrementVolume(n = 1) {
        if (this.volume + n < 100 && this.volume + n > 0){
            this.volume += n;
        }
    }
    decreaseVolume(n = 1) {
        if (this.volume - n < 100 && this.volume - n > 0){
            this.volume += n;
        }
    }
    configureChannel(channel = 1) {
        if (channel < 50 && channel >= 1) {
            this.channel = channel;
        }
    }
    resetTV(){
        this.channel = 1;
        this.volume = 50;
    }
    


}