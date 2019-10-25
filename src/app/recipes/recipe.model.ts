export class Recipe {
	public name: string;
	public desc: string;
	public imageUrl: string;

	constructor(name: string, desc: string, imageUrl: string) {
		this.name = name;
		this.desc = desc;
		this.imageUrl = imageUrl;
	}
}