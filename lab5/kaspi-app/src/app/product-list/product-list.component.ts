import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  category: string;
  liked: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, ProductItemComponent], 
})
export class ProductListComponent {
  @Input() selectedCategory: string = 'Все';
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hca/68542300454942.jpg?format=gallery-large',
      name: 'Наушники Samsung Galaxy Buds Live черный',
      description: 'Galaxy Buds Live мягко сидят в ухе, обеспечивая вам комфортное ношение с минимальным утомлением в течение всего дня. Оцените удобство приницпиально нового эргономичного дизайна с двумя размерами вкладышей для идеальной посадки.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-live-chernyi-100491521/?c=750000000',
      category: 'Гаджеты',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      category: 'Гаджеты',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hea/86009480085534.jpg?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ сиреневый',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. В нем гармонично сочетаются стильный дизайн, материалы премиум-класса, топовая «начинка», камера профессионального уровня.',
      rating: 4.9,
      link: 'https://kaspi.kz/item/asus-laptop',
      category: 'Гаджеты',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/he5/85907055181854.jpg?format=preview-large',
      name: 'Heimish All Clean Balm гидрофильный щербет 120 мл',
      description: 'All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко. Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-gidrofil-nyi-scherbet-120-ml-118982371/?c=750000000',
      category: 'Красота',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h1f/86241006256158.jpg?format=gallery-medium',
      name: 'Skin1004 ампульная сыворотка Madagascar Centella Ampoule для лица 55 мл',
      description: 'Успокаивающий экстракт с центеллой Madagascar Centella Ampoule интенсивно регенерирует и успокаивает вашу кожу. Запускает процессы восстановления и оздоровления кожи на клеточном уровне.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/skin1004-ampul-naja-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000',
      category: 'Красота',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h51/h8f/85882439598110.jpg?format=gallery-medium',
      name: 'Книга Киз Д.: Цветы для Элджернона',
      description: 'Жанр: современная мировая проза',
      rating: 4.6,
      link: 'https://kaspi.kz/item/asus-laptop',
      category: 'Досуг',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/had/h09/64123503837214.jpg?format=gallery-medium',
      name: 'Книга Сильвера А.: В конце они оба умрут',
      description: 'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут. ',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000',
      category: 'Досуг',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/pff/9618280.jpg?format=gallery-medium',
      name: 'Round Lab крем Birch Juice Moisturizing SPF 50+ для лица 50 мл',
      description: 'Крем для лица с SPF Round Lab Birch Juice Moisturizing 50 мл — это инновационное средство, разработанное для интенсивного увлажнения и защиты кожи от негативного воздействия ультрафиолетовых лучей.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf-50-dlja-litsa-dlja-zony-dekol-te-50-ml-130415198/?c=750000000',
      category: 'Красота',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/he9/64373038743582.jpg?format=gallery-medium',
      name: 'Электрочайник Tefal KO172130 белый',
      description: 'Автоотключение при закипании, Фильтр от накипи, 1.8 л',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/elektrochainik-tefal-ko172130-belyi-102931404/?c=750000000',
      category: 'Бытовая техника',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hc4/85945574424606.jpg?format=gallery-medium',
      name: 'Укулеле Gmusic G1023 коричневый',
      description: 'Укулеле Gmusic G1023 (коричневый) — это стильный и компактный укулеле, идеально подходящий для начинающих музыкантов и любителей. Инструмент выполнен в красивом коричневом цвете и обладает ярким, насыщенным звучанием.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/gmusic-g1023-korichnevyi-118885190/?c=750000000',
      category: 'Досуг',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/p5c/1647284.png?format=gallery-medium',
      name: 'Планшет Samsung Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серебристый',
      description: 'Very Expensive',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-tab-s10-ultra-14-6-djuim-12-gb-256-gb-serebristyi-128152129/?c=750000000',
      category: 'Гаджеты',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
      name: 'Ноутбук Apple MacBook Pro 16 2024 / 24 Гб / SSD 512 Гб / macOS / MX2X3',
      description: 'Космический чёрный Макбук Про на 16 дюймов с 24 гигабайтами оперативки и процессором M4 Pro.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/gmusic-g1023-korichnevyi-118885190/?c=750000000',
      category: 'Гаджеты',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hcf/86640324050974.jpg?format=gallery-medium',
      name: 'Celimax тонер Dual Barrier 150 мл',
      description: 'Барьерный кремовый тонер Celimax Dual Barrier Creamy Toner увлажняет, питает и восстанавливает, укрепляет естественный защитный слой и снижает чувствительность кожи к внешним раздражителям, успокаивая и смягчая. Средство устраняет шелушение и сухость.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=750000000',
      category: 'Красота',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-medium',
      name: 'Холодильник LG GC-B459MLWM серый',
      description: 'Укулеле Gmusic G1023 (коричневый) — это стильный и компактный укулеле, идеально подходящий для начинающих музыкантов и любителей. Инструмент выполнен в красивом коричневом цвете и обладает ярким, насыщенным звучанием.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000',
      category: 'Бытовая техника',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/he2/67506672992286.jpg?format=gallery-medium',
      name: 'Пластинка Adele 21',
      description: 'Поп, джаз, блюз',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/adele-21-108301113/?c=750000000',
      category: 'Досуг',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
      name: 'Пылесос Deerma DX115C черный',
      description: 'Вертикальный пылесос Deerma DX115C способен в корне изменить ваше представление о сухой уборке и поможет домочадцам полюбить этот процесс.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000',
      category: 'Бытовая техника',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/p43/18444003.jpg?format=gallery-medium',
      name: 'Увлажнитель воздуха LAK HOME PRO-17 белый',
      description: 'Увлажнитель Lak HomePro 17: комфорт и здоровье в каждой детали! Создайте идеальный микроклимат в вашем доме или офисе с современным увлажнителем LAK HOME Pro 17. Этот стильный и функциональный прибор обеспечит комфортное увлажнение воздуха и добавит уюта в вашу жизнь.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-lak-home-pro-17-belyi-122327160/?c=750000000',
      category: 'Бытовая техника',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/he1/85349273731102.jpg?format=gallery-medium',
      name: 'Тушь для ресниц Loreal Paris Telescopic Explosion для объема, удлиняющая черный',
      description: 'Удлиняющая тушь от LOreal Paris с гибкой пластиковой щеточкой-расческой для густых, объемных и мягких ресниц. Мега длина и разделение. Дарит ресницам насыщенный, глубокий цвет, укрепляет и защищает. Взгляд выразительный и притягательный. Гибкая Щеточка-Расческа высокой точности захватывает и разделяет каждую ресничку. Удлиняющая и укрепляющая формула придает ресницам потрясающую длину до + 60%!',
      rating: 4.4,
      link: 'http://kaspi.kz/shop/p/loreal-paris-telescopic-udlinjajuschaja-chernyi-131535600/?c=750000000',
      category: 'Красота',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p3b/7463539.jpg?format=gallery-medium',
      name: 'Кофемашина SOKANY SK-6862 серебристый',
      description: 'Профессиональная кофемашина SOKANY SK-6862 2 в 1 - идеальное решение для ценителей ароматного и насыщенного кофе. Эта кофеварка позволяет быстро и без лишних усилий приготовить чашку отличного ароматного кофе или капучино. Процесс протекания воды под высоким давлением через свежемолотый кофе улучшает вкус готового напитка, а благодаря уникальной конструкции фильтра образуется изысканная густая пенка.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6862-serebristyi-109791914/?c=750000000',
      category: 'Бытовая техника',
      liked: false
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/pb4/22255961.jpg?format=gallery-medium',
      name: 'Книга Бронте Э.: Незнакомка из Уайлдфелл-Холла. Магистраль.',
      description: 'В заброшенной усадьбе Уайлдфелл-Холл неожиданно появляется молодая женщина в черном. Она красива, умна, образованна и держится независимо. Соседи умирают от любопытства, но загадочная незнакомка не спешит отрыть тайну своего прошлого...',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/bronte-e-neznakomka-iz-uaildfell-holla-magistral-glavnyi-trend-119302367/?c=750000000',
      category: 'Досуг',
      liked: false
    },
  ];
  
  likedProductsCount = 0;

  get filteredProducts() {
    return this.selectedCategory === 'Все'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  toggleLike(product: Product) {
    product.liked = !product.liked;
    this.updateLikedCount();
  }

  updateLikedCount() {
    this.likedProductsCount = this.products.filter(p => p.liked).length;
  }
}
