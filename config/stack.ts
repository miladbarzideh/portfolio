import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,
  java,

  // Frontend
  react,
  reactnative,
  angular,

  // Backend
  graphql,
  node,
  django,
  springboot,

  //Machine learning
  dataanalysis,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,
  mysql,

  // Tools
  docker,
  kubernetes,
  terraform,
  mlflow,

  // Skill
  research,
  softwarearchitecture,
  oopdesign,
  uml,
}

export const WorkStack = [
  Stack.java,
  Stack.python,
  Stack.springboot,
  Stack.kubernetes,
  Stack.docker,
  Stack.kafka,
  Stack.redis,
  Stack.dataanalysis,
  Stack.research,
  Stack.softwarearchitecture,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.java]: {
    value: 'Java',
    color: Colors.typescript,
  },
  [Stack.springboot]: {
    value: 'Spring Boot',
    color: Colors.springboot,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.dataanalysis]: {
    value: 'Data Analysis',
    color: Colors.arangodb,
  },
  [Stack.research]: {
    value: 'Research',
    color: Colors.research,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.softwarearchitecture]: {
    value: 'Software Architecture',
    color: Colors.softwarearchitecture,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.oopdesign]: {
    value: 'Object-Oriented Design',
    color: Colors.java,
  },
  [Stack.uml]: {
    value: 'Unified Modeling Language (UML)',
    color: Colors.redis,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.angular]: {
    value: 'Angular',
    color: Colors.angular,
  },
  [Stack.mongo]: {
    value: 'MongoDB ',
    color: Colors.mongo,
  },
  [Stack.mlflow]: {
    value: 'MLflow ',
    color: Colors.mlflow,
  },
  [Stack.mysql]: {
    value: 'MySql ',
    color: Colors.mysql,
  },
};
