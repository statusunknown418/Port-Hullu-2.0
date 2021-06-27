import { motion, AnimatePresence } from "framer-motion";
import { Thumbnail } from "./Thumbnail";

export const MainContent = ({ requests }) => {
  let array = requests.results;
  return (
    <div className="sm:m-5 m-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
        <AnimatePresence>
          {array.map((e) => (
            <motion.div exit={{ y: 200, opacity: 0 }} key={e.id}>
              <Thumbnail allProps={e} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <h2>Made By Alvaro Aquije</h2>
    </div>
  );
};
