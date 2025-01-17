import { makeObservable, observable, action } from "mobx";

export default class ModalStore {
    // Состояния модальных окон
    isCreateOpen = false;
    isUpdateOpen = false;
    isDeleteOpen = false;
    isViewOpen = false;

    constructor() {
        makeObservable(this, {
            isCreateOpen: observable,
            isUpdateOpen: observable,
            isDeleteOpen: observable,
            isViewOpen: observable,
            openModal: action,
            closeModal: action,
            closeAllModals: action,
        });
    }

    // Открыть указанное модальное окно
    openModal(type) {
        switch (type) {
            case 'create':
                this.isCreateOpen = true;
                break;
            case 'update':
                this.isUpdateOpen = true;
                break;
            case 'delete':
                this.isDeleteOpen = true;
                break;
            case 'view':
                this.isViewOpen = true;
                break;
            default:
                console.warn(`Unknown modal type: ${type}`);
        }
    }

    // Закрыть указанное модальное окно
    closeModal(type) {
        switch (type) {
            case 'create':
                this.isCreateOpen = false;
                break;
            case 'update':
                this.isUpdateOpen = false;
                break;
            case 'delete':
                this.isDeleteOpen = false;
                break;
            case 'view':
                this.isViewOpen = false;
                break;
            default:
                console.warn(`Unknown modal type: ${type}`);
        }
    }

    // Закрыть все модальные окна
    closeAllModals() {
        this.isCreateOpen = false;
        this.isUpdateOpen = false;
        this.isDeleteOpen = false;
        this.isViewOpen = false;
    }
}