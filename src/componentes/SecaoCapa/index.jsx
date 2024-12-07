import styles from "./SecaoCapa.module.css";

export default function SecaoCapa() {
    return (
        <section className={styles.capa_container}>
            <div className={styles.capa_conteudo}>
                <div>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    )
}