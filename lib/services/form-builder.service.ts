import { FORM, TREE } from "lib/endpoints";
import APIService from "./api.service";

class FormBuilderService extends APIService {
  appendNode(data: any): Promise<any> {
    return this.post(TREE, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  addNode(data: any): Promise<any> {
    return this.post(TREE, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  moveNode(data: any): Promise<any> {
    return this.post(TREE, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  deleteNode(data: any): Promise<any> {
    return this.post(TREE, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  createForm(data: any): Promise<any> {
    return this.post(FORM, data)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }

  getForms(): Promise<any> {
    return this.get(FORM)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }
}

export default FormBuilderService;
