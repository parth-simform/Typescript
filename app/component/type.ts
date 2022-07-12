export type NavigationDataType = {
  navigate: (
    screen: string,
    params?: {
      id?: number;
      data?: string;
      number?: number | undefined;
    },
  ) => void;
  params?: {
    id?: number;
    data?: string;
    number?: number | undefined;
  };
  openDrawer: () => void;
  replace: (screenName: string) => void;
  goBack: () => void;
};

export type DetailsScreenRouteProp = {
  route: {
    params: {
      number?: number;
      data?: string;
    };
  };
};
