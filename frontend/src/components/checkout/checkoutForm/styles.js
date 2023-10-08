export class title {
    constructor(text) {
        this.text = text;
        this.styles = 'text-deepOrange text-[13px] font-bold leading-[25px] tracking0[0.929px] uppercase mb-4'
    }
}

export class label {
    constructor(text) {
        this.text = text;
        this.styles = 'text-black text-[12px] font-bold leading-normal tracking-[-0.214px] mb-[9px]'
    }
}

export class input {
    constructor() {
        this.styles = 'w-[280px] text-black font-bold text-sm leading-normal tracking-[-0.25px] mb-6 rounded-lg border border-borderWhite bg-white pl-6 py-[18px] placeholder:opacity-[0.4] cursor-pointer caret-deepOrange focus:border-deepOrange focus:outline-none focus:ring-0'
    }
}