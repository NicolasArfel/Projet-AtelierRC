import { useDispatch, useSelector } from "react-redux";
import { actionPostProject, changeBackInputValue } from "../../../../Redux/Actions/BackProjectsActions";
import BannerBackOffice from "../../BannerBackOffice/BannerBackOffice";
import BackProjetForm from "./BackProjetForm/BackProjetForm";


const BackAddProjet = () => {

  const dispatch = useDispatch();

  const projectName = useSelector((state) => state.BackProjectsReducer.project_name);
  const location = useSelector((state) => state.BackProjectsReducer.location);
  const date = useSelector((state) => state.BackProjectsReducer.date);
  const program = useSelector((state) => state.BackProjectsReducer.program);
  const surface = useSelector((state) => state.BackProjectsReducer.surface);
  const type = useSelector((state) => state.BackProjectsReducer.type);
  const client = useSelector((state) => state.BackProjectsReducer.client);
  const design = useSelector((state) => state.BackProjectsReducer.design);
  const photoCredit = useSelector((state) => state.BackProjectsReducer.photo_credit);
  const label = useSelector((state) => state.BackProjectsReducer.label);
  const userId = useSelector((state) => state.UserReducer.userId);

  const title = 'Back Office'

  return (
    <main className="container" >
      <BannerBackOffice title={title} />

      <div className="row">
        <BackProjetForm
          projectName={projectName}
          location={location}
          date={date}
          program={program}
          surface={surface}
          type={type}
          client={client}
          design={design}
          photoCredit={photoCredit}
          label={label}
          userId={userId}
          changeInputValue={(value, name) => {
            // console.log('changeField', { value, name });
            dispatch(changeBackInputValue(value, name));
          }}
          handlePostProject={(formData, config) => {
            // console.log(formData, config);
            dispatch(actionPostProject(formData, config))
          }}
        />
      </div>
    </main>
  )
}

export default BackAddProjet;