import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MockUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.user = {
      userId: req.headers['x-user-id'],
      organizationId: req.headers['x-org-id'],
      role: req.headers['x-role'],
    };
    next();
  }
}
