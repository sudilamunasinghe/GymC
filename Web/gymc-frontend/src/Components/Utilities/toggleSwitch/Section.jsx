import Switch from './Switch'

const Section = ({title, items}) => {
    return<Section className="pt-[30px] px-10">
         <div className="flex items-center gap-5">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <Switch items={items}/>
         </div>
    </Section>

}
export default Section
