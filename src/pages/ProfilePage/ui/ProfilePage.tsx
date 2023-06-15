import { fetchProfileData, profileReducer } from "entities/Profile";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ReducersList, useDynamicModuleLoader } from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  useDynamicModuleLoader({ reducers, removeOnUnmount: true });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (

    <div>
      {t("Profile page")}
    </div>
  );
});

export default ProfilePage;

