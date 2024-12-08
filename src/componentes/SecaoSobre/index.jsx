import styles from './SecaoSobre.module.css';
import Image from 'next/image';
import sobreImg1 from '../../../public/atendimento.png';
import sobreImg2 from '../../../public/loja.png';

export default function SecaoSobre() {
    return (
        <section className={styles.secao_sobre}>
            <div className={styles.container_sobre}>
                <div className={styles.sobre_texto}>
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento
                    ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e
                    preço baixo.</p>
                </div>
                <div className={styles.sobre_cards}>
                    <div className={styles.card_img}>
                        <Image src={sobreImg2} />
                    </div>
                    <div className={styles.card_texto}>
                        <h2>NOSSAS FILIAIS</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className={styles.card_texto}>
                        <h2>ATENDIMENTO FLEXÍVEL</h2>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <div className={styles.card_img}>
                        <Image src={sobreImg1} />
                    </div>
                </div>
            </div>
        </section>
    )
}