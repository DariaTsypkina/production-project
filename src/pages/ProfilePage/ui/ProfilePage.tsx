import { profileReducer } from "entities/Profile";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ReducersList, useDynamicModuleLoader } from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  useDynamicModuleLoader({ reducers, removeOnUnmount: true });

  return (

    <div>
      {t("Profile page")}
    </div>
  );
});

export default ProfilePage;

