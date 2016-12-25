/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class AboutController {
    constructor(phonesModel) {
        console.log("About created!");
        this.header = "About page";
    }
}

const AboutComponent = {
    template: `
        <h2>Финальное задание. Фесенко Сергей</h2>
    `,
    controller: AboutController
};

export { AboutComponent };