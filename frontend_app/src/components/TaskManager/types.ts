export interface CustomBaseTask {
  title: string;
  description: string;
  parent: string;
}

export interface CustomTask extends CustomBaseTask {
  id: string;
  status: string;
}
